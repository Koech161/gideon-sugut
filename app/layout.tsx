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
  title: "Selly Jepng'etich Rono - Elite Kenyan Marathon Runner",
  description: "Official website of Selly Jepng'etich Rono, elite Kenyan marathon runner and record holder. Explore race achievements, personal bests, training insights, and contact for sponsorship opportunities.",
  keywords: "Selly Jepng'etich Rono, Kenyan marathon runner, elite athlete, long-distance runner, women's marathon, Kenya athletics, professional runner, marathon records, Iten Kenya runner",
  authors: [{ name: "Selly Jepng'etich Rono" }],
  creator: "Selly Jepng'etich Rono",
  publisher: "Selly Jepng'etich Rono",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hillarykiptanui.com/'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Selly Jepng'etich Rono - Elite Kenyan Marathon Runner",
    description: "Professional Kenyan marathon runner specializing in long-distance races.",
    url: 'https://www.hillarykiptanui.com/', // Replace with actual domain
    siteName: "Selly Jepng'etich Rono",
    images: [
      {
        url: '/og-image.jpg', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Selly Jepng'etich Rono - Professional Marathon Runner",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Selly Jepng'etich Rono - Elite Kenyan Marathon Runner",
    description: "Professional Kenyan marathon runner",
    images: ['/twitter-image.jpg'], // Replace with actual Twitter image path
    creator: '@sharonjerop', // Replace with actual Twitter handle
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
