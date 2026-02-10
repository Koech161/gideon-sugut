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
  title: "Meshack Kipruto – Elite Kenyan Long-Distance Runner",
  description:
    "Official website of Meshack Kipruto, elite Kenyan marathon and 10,000m runner training in the Rift Valley. Representing Kenya's world-renowned running heritage from the high-altitude trails to global marathon podiums.",
  keywords:
    "Meshack Kipruto, Kenyan marathon runner, 10,000m athlete Kenya, Rift Valley runner, distance running Kenya, marathon elite, Kenyan endurance athlete, athletics Kenya, altitude training, marathon specialist, road running, Kenyan athlete, long-distance running",
  authors: [{ name: "Meshack Kipruto" }],
  creator: "Meshack Kipruto",
  publisher: "Meshack Kipruto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://meshackkipruto.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meshack Kipruto – Elite Kenyan Long-Distance Runner",
    description:
      "Elite Kenyan marathon and 10,000m specialist training in Kenya's Rift Valley. Competing internationally at the highest level with altitude-honed endurance and racing intelligence.",
    url: "https://meshackkipruto.com/",
    siteName: "Meshack Kipruto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meshack Kipruto – Elite Kenyan Long-Distance Runner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meshack Kipruto – Elite Kenyan Long-Distance Runner",
    description:
      "World Athletics registered Kenyan marathon and 10,000m runner. Built on Rift Valley endurance heritage, altitude training, and elite racing discipline.",
    images: ["/twitter-image.jpg"],
    creator: "@meshackkipruto",
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
    "theme-color": "#ea580c", // Orange-600 color
    "msapplication-TileColor": "#dc2626", // Red-600 color
    "og:color": "#ea580c",
    "og:site_name": "Meshack Kipruto",
    "twitter:site": "@meshackkipruto",
    "twitter:creator": "@meshackkipruto",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Meshack Kipruto",
    },
    {
      name: "application-name",
      content: "Meshack Kipruto",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "keywords",
      content: "Meshack Kipruto, Kenyan runner, marathon athlete, Rift Valley training, 10,000m specialist, Kenya athletics"
    }
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#ea580c", // Orange-600 color
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ],
};

// Structured data for better SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Meshack Kipruto",
  "description": "Elite Kenyan long-distance runner specializing in marathon and 10,000m events.",
  "url": "https://meshackkipruto.com",
  "image": "https://meshackkipruto.com/profile-image.jpg",
  "sameAs": [
    "https://twitter.com/meshackkipruto",
    "https://instagram.com/meshackkipruto",
    "https://facebook.com/meshackkipruto"
  ],
  "jobTitle": "Professional Long-Distance Runner",
  "worksFor": {
    "@type": "Organization",
    "name": "Kenya Athletics"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Rift Valley Athletics Training Camp"
  },
  "homeLocation": {
    "@type": "Place",
    "name": "Rift Valley, Kenya"
  },
  "knowsAbout": ["Marathon Running", "Long-Distance Running", "Altitude Training", "Athletics", "Endurance Sports"],
  "nationality": {
    "@type": "Country",
    "name": "Kenya"
  },
  "gender": "Male",
  "sport": ["Marathon", "10,000 meters", "Long-distance running"],
  "award": [
    "Multiple marathon podium finishes",
    "National athletics champion",
    "International marathon competitor"
  ]
};

// Additional meta tags for performance
export const performanceMeta = {
  additionalMetaTags: [
    {
      name: "msapplication-TileImage",
      content: "/mstile-144x144.png",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
    {
      name: "supported-color-schemes",
      content: "light",
    },
  ],
  additionalLinkTags: [
    {
      rel: "preload",
      href: "/fonts/inter-var.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "image",
      href: "/hero-bg.jpg",
      imagesrcset: "/hero-bg-400.jpg 400w, /hero-bg-800.jpg 800w, /hero-bg-1200.jpg 1200w",
      imagesizes: "100vw",
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
