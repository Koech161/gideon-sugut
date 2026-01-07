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



export const metadata = {
  title: "Faith Jemutai - Elite Kenyan Runner",
  description: "Official website of Faith Jemutai, elite Kenyan runner specializing in 800m and 1500m events. Olympic medalist, African champion, and women in sports ambassador. Explore race results, personal bests, and partnership opportunities.",
  keywords: "Faith Jemutai, Kenyan runner, runner, 800m, 1500m, track athlete, Olympic medalist, African champion, Iten athlete, Kenyan track and field, women in athletics, running sponsorship",
  authors: [{ name: "Faith Jemutai" }],
  creator: "Faith Jemutai",
  publisher: "Faith Jemutai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.faithjemutai.online/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Faith Jemutai - Elite Kenyan Runner",
    description: "Elite Kenyan runner, Olympic medalist, and 800m/1500m specialist. Representing Kenya's track excellence on the global stage.",
    url: 'https://www.faithjemutai.online/',
    siteName: "Faith Jemutai",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Faith Jemutai - Elite Runner from Kenya",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Faith Jemutai - Elite Kenyan Runner",
    description: "Olympic medalist and 800m/1500m specialist representing Kenya in international track competitions",
    images: ['/twitter-image.jpg'],
    creator: '@faithjemutai', // Replace with actual Twitter handle if available
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
    'theme-color': '#f97316', // Orange-500 for mobile browsers
    'msapplication-TileColor': '#f97316',
    'og:color': '#f97316',
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
