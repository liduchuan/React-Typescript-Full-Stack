import { readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../../../../../../', 'assets');

export async function GET(request: NextRequest) {
  try {
    const { pathname } = new URL(request.url);
    const assetName = pathname.split('/').filter(Boolean).slice(1).join('/');
    const content = await readFile(path.join(ASSETS_DIR, assetName), 'utf-8');
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400', // 缓存1天
      },
    });

  } catch (error) {
    console.error('Error reading asset:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
