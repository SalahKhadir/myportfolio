import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Salah Khadir | Software & DevOps Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const iconBuffer = await fetch(new URL('./icon.png', import.meta.url)).then((res) => res.arrayBuffer());
  const iconBase64 = Buffer.from(iconBuffer).toString('base64');
  const iconSrc = `data:image/png;base64,${iconBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          backgroundImage:
            'radial-gradient(circle at 50% 40%, #171717 0%, #050505 70%)',
          position: 'relative',
        }}
      >
        {/* Subtle decorative border grid */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            display: 'flex',
          }}
        />

        {/* Brand Monogram Icon Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '128px',
            height: '128px',
            borderRadius: '32px',
            backgroundColor: '#0d0d0d',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
          }}
        >
          <img src={iconSrc} width="128" height="128" />
        </div>

        {/* Name Header */}
        <div
          style={{
            marginTop: '36px',
            fontSize: '52px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Salah Khadir
        </div>

        {/* Engineering Title */}
        <div
          style={{
            marginTop: '12px',
            fontSize: '22px',
            fontFamily: 'monospace',
            letterSpacing: '0.08em',
            color: '#a3a3a3',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          SOFTWARE &amp; DEVOPS ENGINEER
        </div>

        {/* Stack Highlights Footer Pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '36px',
          }}
        >
          {['SPRING BOOT', 'FASTAPI', 'GITLAB CI/CD', 'OCI CERTIFIED'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: '#737373',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
