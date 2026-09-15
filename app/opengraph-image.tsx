import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden', background: '#fbf8f2', color: '#211b17', padding: '72px 78px' }}>
      <div style={{ position: 'absolute', width: 680, height: 680, borderRadius: 680, right: -230, top: -250, background: '#ead9b9' }} />
      <div style={{ position: 'absolute', width: 540, height: 540, borderRadius: 540, right: -100, bottom: -390, border: '2px solid #b28b57' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Georgia', fontSize: 54, fontStyle: 'italic', color: '#78562f' }}>df.</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Georgia', fontSize: 78, lineHeight: .95, letterSpacing: -4 }}>Dra. Daniella Félix</div>
          <div style={{ marginTop: 24, fontSize: 24, letterSpacing: 5, color: '#78562f' }}>HARMONIZAÇÃO FACIAL E CORPORAL</div>
        </div>
        <div style={{ fontSize: 25, color: '#5f554c' }}>Sua melhor versão, sem deixar de ser você.</div>
      </div>
    </div>,
    size,
  );
}
