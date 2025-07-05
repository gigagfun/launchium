import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Using Helius RPC endpoint for better reliability
    const HELIUS_API_KEY = process.env.HELIUS_API_KEY || 'demo-key'
    const rpcUrl = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`
    
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getBalance',
        params: ['ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV']
      })
    })

    if (!response.ok) {
      throw new Error('Failed to fetch balance')
    }

    const data = await response.json()
    
    if (data.error) {
      throw new Error(data.error.message)
    }

    // Convert lamports to SOL
    const balanceInSOL = data.result.value / 1000000000

    return NextResponse.json({ 
      balance: balanceInSOL,
      address: 'ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching Solana balance:', error)
    
    // Return manual tracking value as fallback
    return NextResponse.json({ 
      balance: 12.5, // Manual tracking
      address: 'ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV',
      timestamp: new Date().toISOString(),
      manual: true
    })
  }
} 