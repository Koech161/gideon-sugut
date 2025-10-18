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
  title: "Eric Kiprono Sang - Professional Kenyan Distance Runner",
  description: "Official website of Eric Kiprono Sang, professional Kenyan distance runner specializing in marathon, half marathon, and 10K road events. Explore race results, personal bests, and partnership opportunities.",
  keywords: "Eric Kiprono Sang, Kenyan runner, professional athlete, distance runner, marathon runner, half marathon, 10K road race, Kenya athletics, Eldoret runner, Rift Valley athlete, running sponsorship",
  authors: [{ name: "Eric Kiprono Sang" }],
  creator: "Eric Kiprono Sang",
  publisher: "Eric Kiprono Sang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ericsang.live/'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Eric Kiprono Sang - Professional Kenyan Distance Runner",
    description: "Professional Kenyan distance runner known for strategic racing and consistent performances in international marathon and road race competitions.",
    url: 'https://www.ericsang.live/',
    siteName: "Eric Kiprono Sang",
    images: [
      {
        url: '/og-image.jpg', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Eric Kiprono Sang - Professional Distance Runner from Kenya",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eric Kiprono Sang - Professional Kenyan Distance Runner",
    description: "Strategic distance runner representing Kenya in international marathon competitions",
    images: ['/twitter-image.jpg'], // Replace with actual Twitter image path
    creator: '@erickipronosang', // Replace with actual Twitter handle if available
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
  other: {
    'theme-color': '#78716c', // Stone color for mobile browsers
    'msapplication-TileColor': '#78716c',
  }
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
