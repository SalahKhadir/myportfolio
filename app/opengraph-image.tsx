import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const alt = 'Salah Khadir - Software & DevOps Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Read icon.svg directly from public
  const iconPath = path.join(process.cwd(), 'public', 'icon.svg');
  const svgContent = fs.readFileSync(iconPath, 'utf8');

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #262626',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '220px',
            height: '220px',
            borderRadius: '36px',
            background: '#121212',
            border: '2px solid #333333',
            padding: '30px',
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
        <div
          style={{
            marginTop: '32px',
            fontSize: '40px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          Salah Khadir
        </div>
        <div
          style={{
            marginTop: '10px',
            fontSize: '22px',
            color: '#a3a3a3',
            fontFamily: 'monospace',
          }}
        >
          Software & DevOps Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
