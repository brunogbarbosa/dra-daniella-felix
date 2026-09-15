import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: '#211b17', color: '#dcc7a4', fontFamily: 'Georgia', fontSize: 33, fontStyle: 'italic', letterSpacing: -3 }}>
      df<span style={{ color: '#fbf8f2', fontSize: 24 }}>.</span>
    </div>,
    size,
  );
}
