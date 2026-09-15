import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { site } from '@/data/site';
import './globals.css';
import './signature.css';
import './campaign.css';
import './essence.css';
const metadataBase = new URL(site.seo.url || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));
export const metadata: Metadata = { metadataBase, title: site.seo.title, description: site.seo.description, keywords: ['Dra. Ingrid Alfano', 'harmonização facial', 'rejuvenescimento facial', 'naturalização de traços', 'Salvador'], creator: 'Dra. Ingrid Alfano', category: 'beleza e estética', ...(site.seo.url ? { alternates: { canonical: '/' } } : {}), openGraph: { title: site.seo.title, description: site.seo.description, siteName: 'Dra. Ingrid Alfano', locale: 'pt_BR', type: 'website', images: [{ url: '/opengraph-image.jpg', width: 1672, height: 941, alt: 'Dra. Ingrid Alfano — Harmonização facial em Salvador' }] }, twitter: { card: 'summary_large_image', title: site.seo.title, description: site.seo.description, images: ['/twitter-image.jpg'] } };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="pt-BR"><body style={{'--paper':site.colors.paper,'--ink':site.colors.ink,'--taupe':site.colors.taupe,'--champagne':site.colors.champagne,'--dark':site.colors.dark} as CSSProperties}>{children}</body></html>}
