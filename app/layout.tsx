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
  title: "Robert Kiprop - Kenyan Distance Runner ",
  description: "Official website of Robert Kiprop, elite Kenyan distance runner specializing in 10,000m, half marathon, and marathon events. Explore championship achievements, personal bests, and partnership opportunities.",
  keywords: "Robert Kiprop, Kenyan runner, elite athlete, distance runner, women's running, Kenya athletics, 10,000m runner, half marathon, marathon, Nakuru runner, Rift Valley athlete",
  authors: [{ name: "Robert Kiprop" }],
  creator: "Robert Kiprop",
  publisher: "Robert Kiprop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://janexjepkogei.com/'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Robert Kiprop - Elite Kenyan Distance Runner",
    description: "Professional Kenyan distance runner known for explosive finishes and championship performances in international competitions.",
    url: 'https://janexjepkogei.com/',
    siteName: "Robert Kiprop",
    images: [
      {
        url: '/og-image.jpg', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Robert Kiprop - Professional Distance Runner from Kenya",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Robert Kiprop - Elite Kenyan Distance Runner",
    description: "Championship distance runner representing Kenya on the global stage",
    images: ['/twitter-image.jpg'], // Replace with actual Twitter image path
    creator: '@janexjepkogei', // Replace with actual Twitter handle
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
    'theme-color': '#10b981', // Emerald color for mobile browsers
    'msapplication-TileColor': '#10b981',
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
