'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Facial', label: 'CONTORNOS PERSONALIZADOS' },
  { value: 'Corporal', label: 'PROTOCOLOS SOB MEDIDA' },
  { value: 'Você', label: 'NO CENTRO DE CADA ESCOLHA' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Beleza real, essência preservada">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">BELEZA REAL</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">ESSÊNCIA PRESERVADA</textPath>
      </text>
      <path pathLength="1" d="M57 92c17-31 49-37 67-8M54 105c23 25 54 27 78 2M90 58v64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL E CORPORAL</p>
        <h1 id="campaign-title" aria-label="Sua melhor versão, sendo você">
          <span className="campaign-title-line"><span>SUA MELHOR</span></span>
          <span className="campaign-title-line"><span>VERSÃO,</span></span>
          <span className="campaign-title-line"><span>SENDO VOCÊ.</span></span>
        </h1>
        <p className="campaign-subtitle">Contornos que valorizam seus traços.<br/>Resultados que preservam sua essência.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
        <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Dra. Ingrid Alfano" fill loading="eager" sizes="(max-width:700px) 145vw, (max-width:1100px) 77vw, 60vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Beleza<br/>com<br/>identidade<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Atendimento em números">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. INGRID ALFANO</p><em>Rejuvenescimento<br className="campaign-signature-break"/> com ciência e naturalidade.</em></div></div>
    </div>
  </section>;
}
