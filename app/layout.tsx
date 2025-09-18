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
  title: "Kitur Cyprian Kipkemei - Professional Kenyan Marathon Runner",
  description: "Official website of Kitur Cyprian Kipkemei, elite Kenyan marathon runner. Explore race records, achievements, training insights, and contact for sponsorship opportunities.",
  keywords: "Kitur Cyprian Kipkemei, Kenyan marathon runner, long-distance runner, athletics, marathon records, Kenya athletics, professional runner, race results",
  authors: [{ name: "Kitur Cyprian Kipkemei" }],
  creator: "Kitur Cyprian Kipkemei",
  publisher: "Kitur Cyprian Kipkemei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kiturkipkemei.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kitur Cyprian Kipkemei - Professional Kenyan Marathon Runner",
    description: "Elite Kenyan marathon runner specializing in long-distance races. Record holder and champion athlete.",
    url: 'https://kiturkipkemei.com', // Replace with actual domain
    siteName: "Kitur Cyprian Kipkemei",
    images: [
      {
        url: '/favicon.ico', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: 'Kitur Cyprian Kipkemei - Professional Marathon Runner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kitur Cyprian Kipkemei - Professional Kenyan Marathon Runner",
    description: "Elite Kenyan marathon runner specializing in long-distance races.",
    images: ['/favicon.ico'], // Replace with actual Twitter image path
    creator: '@kitur_kipkemei', // Replace with actual Twitter handle
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
