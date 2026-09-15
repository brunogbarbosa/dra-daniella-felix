import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { site } from '@/data/site';
import './globals.css';
import './signature.css';
import './campaign.css';
import './essence.css';
const metadataBase = new URL(site.seo.url || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));
export const metadata: Metadata = { metadataBase, title: site.seo.title, description: site.seo.description, keywords: ['Dra. Daniella Félix', 'harmonização facial', 'harmonização corporal', 'estética avançada', 'Catolé do Rocha'], creator: 'Clínica Daniella Félix', category: 'beleza e estética', ...(site.seo.url ? { alternates: { canonical: '/' } } : {}), openGraph: { title: site.seo.title, description: site.seo.description, siteName: 'Clínica Daniella Félix', locale: 'pt_BR', type: 'website' }, twitter: { card: 'summary_large_image', title: site.seo.title, description: site.seo.description } };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="pt-BR"><body style={{'--paper':site.colors.paper,'--ink':site.colors.ink,'--taupe':site.colors.taupe,'--champagne':site.colors.champagne,'--dark':site.colors.dark} as CSSProperties}>{children}</body></html>}
