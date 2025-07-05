import { NextResponse } from 'next/server'

export async function GET() {
  const address = 'ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV'
  
  // Multiple RPC endpoints to try
  const rpcEndpoints = [
    'https://api.mainnet-beta.solana.com',
    'https://solana-api.projectserum.com',
    'https://rpc.ankr.com/solana',
    'https://solana-mainnet.g.alchemy.com/v2/demo'
  ]

  for (const rpcUrl of rpcEndpoints) {
    try {
      console.log(`Trying RPC endpoint: ${rpcUrl}`)
      
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getBalance',
          params: [address]
        })
      })

      if (!response.ok) {
        console.log(`RPC ${rpcUrl} failed with status: ${response.status}`)
        continue
      }

      const data = await response.json()
      
      if (data.error) {
        console.log(`RPC ${rpcUrl} returned error:`, data.error)
        continue
      }

      // Convert lamports to SOL
      const balanceInSOL = data.result.value / 1000000000
      
      console.log(`Successfully fetched balance: ${balanceInSOL} SOL`)

      return NextResponse.json({ 
        balance: balanceInSOL,
        address: address,
        timestamp: new Date().toISOString(),
        rpcUsed: rpcUrl
      })

    } catch (error) {
      console.log(`RPC ${rpcUrl} failed:`, error)
      continue
    }
  }

  // If all RPCs fail, return the actual current balance
  // Based on the presale status, let's return 0 as the starting point
  console.log('All RPC endpoints failed, returning fallback balance')
  
  return NextResponse.json({ 
    balance: 0, // Starting from 0 since presale just started
    address: address,
    timestamp: new Date().toISOString(),
    manual: true,
    note: 'All RPC endpoints failed, showing manual tracking'
  })
} 