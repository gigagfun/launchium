import { NextResponse } from 'next/server'

export async function GET() {
  const address = 'ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV'
  
  try {
    // Try Solscan API first
    console.log('Fetching from Solscan API...')
    const solscanResponse = await fetch(`https://api.solscan.io/account?address=${address}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    })

    if (solscanResponse.ok) {
      const solscanData = await solscanResponse.json()
      const balanceInSOL = solscanData.lamports / 1000000000
      
      console.log(`Successfully fetched from Solscan: ${balanceInSOL} SOL`)
      
      return NextResponse.json({ 
        balance: balanceInSOL,
        address: address,
        timestamp: new Date().toISOString(),
        source: 'solscan'
      })
    }
  } catch (error) {
    console.log('Solscan failed:', error)
  }

  // Fallback to RPC endpoints
  const rpcEndpoints = [
    'https://api.mainnet-beta.solana.com',
    'https://solana-api.projectserum.com',
    'https://rpc.ankr.com/solana'
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

      const balanceInSOL = data.result.value / 1000000000
      
      console.log(`Successfully fetched from RPC: ${balanceInSOL} SOL`)

      return NextResponse.json({ 
        balance: balanceInSOL,
        address: address,
        timestamp: new Date().toISOString(),
        source: 'rpc',
        rpcUsed: rpcUrl
      })

    } catch (error) {
      console.log(`RPC ${rpcUrl} failed:`, error)
      continue
    }
  }

  // If everything fails, return 0
  console.log('All endpoints failed, returning 0')
  
  return NextResponse.json({ 
    balance: 0,
    address: address,
    timestamp: new Date().toISOString(),
    source: 'fallback',
    note: 'All endpoints failed'
  })
} 