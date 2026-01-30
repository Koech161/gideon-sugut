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
  title: "Grace Njoki – Elite Kenyan Long-Distance Runner",
  description:
    "Official website of Grace Njoki, elite Kenyan marathon and half-marathon runner training in the Rift Valley. Representing Kenya's world-renowned running heritage from the high-altitude trails to global marathon podiums.",
  keywords:
    "Grace Njoki, Kenyan marathon runner, half marathon athlete Kenya, Rift Valley runner, distance running Kenya, marathon elite, Kenyan endurance athlete, women's athletics Kenya, altitude training, marathon specialist, road running, Kenyan athlete",
  authors: [{ name: "Grace Njoki" }],
  creator: "Grace Njoki",
  publisher: "Grace Njoki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gracenjoki.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grace Njoki – Elite Kenyan Long-Distance Runner",
    description:
      "Elite Kenyan marathon and half-marathon specialist training in Kenya's Rift Valley. Competing internationally at the highest level with altitude-honed endurance and racing intelligence.",
    url: "https://gracenjoki.com/",
    siteName: "Grace Njoki",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grace Njoki – Elite Kenyan Long-Distance Runner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Njoki – Elite Kenyan Long-Distance Runner",
    description:
      "World Athletics registered Kenyan marathon and half-marathon runner. Built on Rift Valley endurance heritage, altitude training, and elite racing discipline.",
    images: ["/twitter-image.jpg"],
    creator: "@gracenjoki",
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
    "theme-color": "#10b981", // Emerald color
    "msapplication-TileColor": "#10b981",
    "og:color": "#10b981",
    "og:site_name": "Grace Njoki",
    "twitter:site": "@gracenjoki",
    "twitter:creator": "@gracenjoki",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  // Additional structured data for better SEO
  
  // Additional meta tags for social media and SEO
  additionalMetaTags: [
    {
      property: "fb:app_id",
      content: "YOUR_FACEBOOK_APP_ID", // Add if you have one
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Grace Njoki",
    },
    {
      name: "application-name",
      content: "Grace Njoki",
    },
  ],
  // Additional link tags
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#10b981", // Emerald color
    },
  ],
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
