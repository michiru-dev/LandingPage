// サイトダウンの検証用のミドルウェア
import { NextResponse } from 'next/server'

export function middleware() {
  const maintenanceMode = process.env.MAINTENANCE_MODE

  if (maintenanceMode === 'true') {
    return new NextResponse('Service Unavailable', { status: 503 })
  }

  return NextResponse.next()
}
