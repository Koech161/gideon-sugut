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
  title: "Faith Jemutai – Elite Kenyan Long-Distance Runner",
  description:
    "Official website of Faith Jemutai, elite Kenyan long-distance runner specializing in 10K, Half Marathon, and Marathon events. Based in Iten, Kenya, representing endurance, discipline, and excellence on the global road-racing stage.",
  keywords:
    "Faith Jemutai, Kenyan long distance runner, marathon runner Kenya, half marathon athlete, 10K runner, road running Kenya, Iten athlete, Kenyan endurance runner, women in athletics, marathon sponsorship",
  authors: [{ name: "Faith Jemutai" }],
  creator: "Faith Jemutai",
  publisher: "Faith Jemutai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.faithjemutai.online/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Faith Jemutai – Elite Kenyan Long-Distance Runner",
    description:
      "Elite Kenyan endurance athlete specializing in 10K, Half Marathon, and Marathon races. Training in Iten and competing on the global road-running circuit.",
    url: "https://www.faithjemutai.online/",
    siteName: "Faith Jemutai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faith Jemutai – Elite Kenyan Long-Distance Runner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Jemutai – Elite Kenyan Long-Distance Runner",
    description:
      "Kenyan endurance runner competing in 10K, Half Marathon & Marathon events. Built on discipline, altitude training, and consistency.",
    images: ["/twitter-image.jpg"],
    creator: "@faithjemutai", // update if needed
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "sports",
  other: {
    "theme-color": "#f97316",
    "msapplication-TileColor": "#f97316",
    "og:color": "#f97316",
  },
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
