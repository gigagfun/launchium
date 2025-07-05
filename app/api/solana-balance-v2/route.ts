import { NextResponse } from 'next/server'

export async function GET() {
  const address = 'ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV'
  
  // Add cache-busting timestamp
  const timestamp = Date.now()
  
  try {
    // Try multiple RPC endpoints with better error handling
    const rpcEndpoints = [
      'https://api.mainnet-beta.solana.com',
      'https://solana-api.projectserum.com',
      'https://rpc.ankr.com/solana',
      'https://api.solana.fm',
      'https://solana-mainnet.rpc.extrnode.com'
    ]

    for (const rpcUrl of rpcEndpoints) {
      try {
        console.log(`Trying RPC endpoint: ${rpcUrl}`)
        
        const response = await fetch(rpcUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: timestamp,
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

        // Return with cache-busting headers
        return new NextResponse(JSON.stringify({ 
          balance: balanceInSOL,
          address: address,
          timestamp: new Date().toISOString(),
          source: 'rpc',
          rpcUsed: rpcUrl,
          cacheBuster: timestamp
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })

      } catch (error) {
        console.log(`RPC ${rpcUrl} failed:`, error)
        continue
      }
    }

    // Try Solscan as fallback
    try {
      console.log('Trying Solscan API as fallback...')
      const solscanResponse = await fetch(`https://api.solscan.io/account?address=${address}&t=${timestamp}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      })

      if (solscanResponse.ok) {
        const solscanData = await solscanResponse.json()
        const balanceInSOL = solscanData.lamports / 1000000000
        
        console.log(`Successfully fetched from Solscan: ${balanceInSOL} SOL`)
        
        return new NextResponse(JSON.stringify({ 
          balance: balanceInSOL,
          address: address,
          timestamp: new Date().toISOString(),
          source: 'solscan',
          cacheBuster: timestamp
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })
      }
    } catch (error) {
      console.log('Solscan failed:', error)
    }

  } catch (error) {
    console.log('General error:', error)
  }

  // If everything fails, return 0 with cache-busting headers
  console.log('All endpoints failed, returning 0')
  
  return new NextResponse(JSON.stringify({ 
    balance: 0,
    address: address,
    timestamp: new Date().toISOString(),
    source: 'fallback',
    note: 'All endpoints failed',
    cacheBuster: timestamp
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
} 