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
  title: "Gideon Kiptoo Sugut – Kenyan Long-Distance Runner | Rift Valley",
  description:
    "Official website of Gideon Kiptoo Sugut, Kenyan long-distance runner training in Iten, Kenya. Specializing in 10km, half marathon, and marathon distances on the local road racing circuit. Representing the authentic running tradition of the Rift Valley.",
  keywords:
    "Gideon Kiptoo Sugut, Kenyan runner, Iten Kenya runner, Kenyan distance running, Rift Valley runner, marathon training Kenya, 10km road race, half marathon Kenya, altitude training Iten, long-distance running Kenya, East African runner, local circuit Kenya",
  authors: [{ name: "Gideon Kiptoo Sugut" }],
  creator: "Gideon Kiptoo Sugut",
  publisher: "Gideon Kiptoo Sugut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gideonsugut.run"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gideon Kiptoo Sugut – Kenyan Long-Distance Runner",
    description:
     "Kenyan distance runner Gideon Kiptoo Sugut, training in the high-altitude 'Home of Champions,' Iten. A competitor in 10km, half marathon, and marathon distances on the local road circuit, focused on endurance, discipline, and the authentic tradition of Rift Valley running.",
    url: "https://gideonsugut.run/",
    siteName: "Gideon Kiptoo Sugut",
    images: [
      {
        url: "/og-image-gideon.jpg",
        width: 1200,
        height: 630,
        alt: "Gideon Kiptoo Sugut – Kenyan Long-Distance Runner from Iten",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gideon Kiptoo Sugut – Kenyan Distance Runner",
    description:
      "Long-distance runner based in Iten, Rift Valley. Specializing in 10km, half marathon, and marathon distances on the local Kenyan road circuit.",
    images: ["/twitter-image-gideon.jpg"],
    creator: "@gideonsugut",
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
    "theme-color": "#10b981", // Emerald-500 color
    "msapplication-TileColor": "#059669", // Emerald-600 color
    "og:color": "#10b981",
    "og:site_name": "Gideon Kiptoo Sugut",
    "twitter:site": "@gideonsugut",
    "twitter:creator": "@gideonsugut",
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
      content: "Gideon Sugut",
    },
    {
      name: "application-name",
      content: "Gideon Kiptoo Sugut",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "keywords",
      content: "Gideon Kiptoo Sugut, Kenyan athlete, Iten runner, marathon runner Kenya, half marathon Kenya, 10km road race, Rift Valley running, local circuit Kenya"
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
      href: "/apple-touch-icon-gideon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#10b981", // Emerald-500 color
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
  "name": "Gideon Kiptoo Sugut",
  "description": "Kenyan long-distance runner specializing in 10km, half marathon, and marathon distances. Trains in Iten, Kenya at 2,400m altitude.",
  "url": "https://gideonsugut.run",
  "image": "https://gideonsugut.run/profile-gideon.jpg",
  "sameAs": [
    "https://twitter.com/gideonsugut",
    "https://instagram.com/gideonsugut",
    "https://facebook.com/gideonsugut"
  ],
  "jobTitle": "Long-Distance Runner",
  "memberOf": {
    "@type": "Organization",
    "name": "Local Athletics Circuit"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Iten High-Altitude Training Camp"
  },
  "homeLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Iten",
      "addressRegion": "Elgeyo-Marakwet",
      "addressCountry": "Kenya"
    }
  },
  "knowsAbout": [
    "10km road running", 
    "Half marathon", 
    "Marathon", 
    "Altitude Training Methodology", 
    "Kenyan Distance Running Tradition", 
    "Endurance Sports",
    "Road Racing Circuit"
  ],
  "nationality": {
    "@type": "Country",
    "name": "Kenya"
  },
  "gender": "Male",
  "sport": ["10km road race", "Half marathon", "Marathon", "Cross country running"],
  "height": "172 cm",
  "weight": "56 kg",
  "coach": {
    "@type": "Person",
    "name": "Local Training Partners"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Local Athletics ID",
    "value": "KE-2024-001"
  },
};

// Training approach structured data
export const trainingStructuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Iten High-Altitude Training Base",
  "description": "Traditional Kenyan training grounds in the Rift Valley where Gideon Kiptoo Sugut prepares for 10km, half marathon, and marathon distances on the local circuit.",
  "url": "https://gideonsugut.run/training",
  "sport": ["Long-distance running", "Marathon training", "Half marathon", "10km road race"],
  "location": {
    "@type": "Place",
    "name": "Iten, Kenya",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Iten",
      "addressRegion": "Elgeyo-Marakwet",
      "addressCountry": "Kenya"
    }
  },
  "areaServed": "Rift Valley, Kenya",
  "featureList": "High-altitude training at 2,400m, traditional Kenyan running methods, group training sessions"
};

// Local race circuit structured data
export const localCircuitStructuredData = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "Rift Valley Road Race Circuit",
  "description": "Local road racing events in Kenya where Gideon Kiptoo Sugut competes across 10km, half marathon, and marathon distances.",
  "location": {
    "@type": "Place",
    "name": "Rift Valley Region",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Rift Valley",
      "addressCountry": "Kenya"
    }
  },
  "sport": ["10km road race", "Half marathon", "Marathon"],
  "competitor": {
    "@type": "Person",
    "name": "Gideon Kiptoo Sugut"
  }
};
// Additional meta tags for performance
export const performanceMeta = {
  additionalMetaTags: [
    {
      name: "msapplication-TileImage",
      content: "/mstile-144x144-caroline.png",
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
    {
      name: "instagram:site",
      content: "@carolinejelimo"
    }
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
      href: "/hero-caroline-bg.jpg",
      imagesrcset: "/hero-caroline-400.jpg 400w, /hero-caroline-800.jpg 800w, /hero-caroline-1200.jpg 1200w",
      imagesizes: "100vw",
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "Caroline Jelimo - Latest News",
      href: "/feed.xml"
    }
  ],
};

// Verification meta tags
export const verificationMeta = {
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "your-google-verification-code-caroline"
    }
  ]
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
