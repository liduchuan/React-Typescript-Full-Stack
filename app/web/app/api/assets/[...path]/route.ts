import { readFile, stat } from 'fs/promises';
import mime from 'mime-types';
import { NextRequest, NextResponse } from 'next/server';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../../../../../../', 'assets');

export async function GET(request: NextRequest) {
  try {
    const { pathname } = new URL(request.url);
    const assetName = pathname.split('/').filter(Boolean).slice(1).join('/');
    const filePath = path.resolve(ASSETS_DIR, assetName);

    if (!filePath.startsWith(ASSETS_DIR)) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    let stats;
    try {
      stats = await stat(filePath);
    } catch (error) {
      return new NextResponse('Not Found', { status: 404 });
    }

    if (!stats.isFile()) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const contentType = mime.lookup(assetName) || 'application/octet-stream';
    const isTextFile = mime.charset(contentType) === 'UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400', // 缓存1天
    };
    if (isTextFile) {
      const content = await readFile(filePath, 'utf-8');
      return new NextResponse(content, {
        status: 200,
        headers,
      });
    } else {
      const buffer = await readFile(filePath);
      return new Response(new Uint8Array(buffer), {
        status: 200,
        headers,
      });
    }
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
