import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 38, background: '#22191d', color: '#e6cdd0', fontFamily: 'Georgia', fontSize: 94, fontStyle: 'italic', letterSpacing: -8 }}>
      ia<span style={{ color: '#f8f4ee', fontSize: 68 }}>.</span>
    </div>,
    size,
  );
}
