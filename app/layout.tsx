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
  title: "Joyline Jepleting – Elite Kenyan Long-Distance Runner",
  description:
    "Official website of Joyline Jepleting, elite Kenyan long-distance runner specializing in 10,000m, Half Marathon, and Marathon events. Representing Kenya's world-renowned running heritage from the Rift Valley to global podiums.",
  keywords:
    "Joyline Jepleting, Kenyan long distance runner, marathon runner Kenya, half marathon athlete, 10,000m runner, distance running Kenya, Rift Valley athlete, Kenyan endurance athlete, women's athletics Kenya, marathon elite, road running, track athlete",
  authors: [{ name: "Joyline Jepleting" }],
  creator: "Joyline Jepleting",
  publisher: "Joyline Jepleting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joylinejepleting.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joyline Jepleting – Elite Kenyan Long-Distance Runner",
    description:
      "Elite Kenyan endurance athlete specializing in 10,000m track, Half Marathon, and Marathon races. Training in Kenya's Rift Valley and competing internationally at the highest level.",
    url: "https://joylinejepleting.com/",
    siteName: "Joyline Jepleting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joyline Jepleting – Elite Kenyan Long-Distance Runner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyline Jepleting – Elite Kenyan Long-Distance Runner",
    description:
      "World Athletics registered Kenyan runner competing in 10,000m, Half Marathon & Marathon events. Built on Rift Valley endurance heritage and elite training discipline.",
    images: ["/twitter-image.jpg"],
    creator: "@joylinejepleting",
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
    "theme-color": "#d946ef", // Fuchsia color
    "msapplication-TileColor": "#d946ef",
    "og:color": "#d946ef",
    "og:site_name": "Joyline Jepleting",
    "twitter:site": "@joylinejepleting",
    "twitter:creator": "@joylinejepleting",
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
      content: "Joyline Jepleting",
    },
    {
      name: "application-name",
      content: "Joyline Jepleting",
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
      color: "#d946ef",
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
