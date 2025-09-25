import type { Metadata } from "next";
import { Jost} from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-jost', 
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Hilda Cheptoo Biwott - Elite Kenyan Marathon Runner",
  description: "Official website of Hilda Cheptoo Biwott, elite Kenyan marathon runner and record holder. Explore race achievements, personal bests, training insights, and contact for sponsorship opportunities.",
  keywords: "Hilda Cheptoo Biwott, Kenyan marathon runner, elite athlete, long-distance runner, women's marathon, Kenya athletics, professional runner, marathon records, Iten Kenya runner",
  authors: [{ name: "Hilda Cheptoo Biwott" }],
  creator: "Hilda Cheptoo Biwott",
  publisher: "Hilda Cheptoo Biwott",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hildahcheptoo.live/'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hilda Cheptoo Biwott - Elite Kenyan Marathon Runner",
    description: "Professional Kenyan marathon runner specializing in long-distance races.",
    url: 'https://www.hildahcheptoo.live/', // Replace with actual domain
    siteName: "Hilda Cheptoo Biwott",
    images: [
      {
        url: '/favicon.ico', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Hilda Cheptoo Biwott - Professional Marathon Runner",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hilda Cheptoo Biwott - Elite Kenyan Marathon Runner",
    description: "Professional Kenyan marathon runner",
    images: ['/twitter-image.jpg'], // Replace with actual Twitter image path
    creator: '@cheptoohildah', // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'sports',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body
         className={`${jost.className}  antialiased`}
      >
        {children}
      </body>
      <Footer/>
    </html>
  );
}
