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
  title: "Caroline Jelimo – Elite Kenyan Long-Distance Runner | Rift Valley",
  description:
    "Official website of Caroline Jelimo, elite Kenyan 10,000m and 5,000m runner training in Iten, Kenya. Rising star of Kenyan women's distance running, representing Kenya Prisons and Athletics Kenya with grace, determination, and championship ambition.",
  keywords:
    "Caroline Jelimo, Kenyan female runner, Iten Kenya runner, 10,000m specialist Kenya, 5,000m athlete, Kenyan women's distance running, Rift Valley runner, Kenya Prisons athletics, Kenyan track athlete, altitude training Iten, female marathon prospect, Athletics Kenya, long-distance running Kenya, East African runner",
  authors: [{ name: "Caroline Jelimo" }],
  creator: "Caroline Jelimo",
  publisher: "Caroline Jelimo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://carolinejelimo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Caroline Jelimo – Elite Kenyan Long-Distance Runner",
    description:
      "Kenyan 10,000m and 5,000m specialist training at 2,400m in Iten, Kenya. Representing Kenya Prisons with a 30:41 PB and ambitions for World Championships and Olympic glory.",
    url: "https://carolinejelimo.com/",
    siteName: "Caroline Jelimo",
    images: [
      {
        url: "/og-image-caroline.jpg",
        width: 1200,
        height: 630,
        alt: "Caroline Jelimo – Elite Kenyan Long-Distance Runner from Iten",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caroline Jelimo – Kenyan 10,000m Specialist",
    description:
      "Athletics Kenya registered runner. Forged in Iten's high-altitude trails. 10,000m: 30:41 | 5,000m: 14:58. Rising star of Kenyan women's distance running.",
    images: ["/twitter-image-caroline.jpg"],
    creator: "@carolinejelimo",
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
    "theme-color": "#ec4899", // Pink-500 color
    "msapplication-TileColor": "#f43f5e", // Rose-500 color
    "og:color": "#ec4899",
    "og:site_name": "Caroline Jelimo",
    "twitter:site": "@carolinejelimo",
    "twitter:creator": "@carolinejelimo",
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
      content: "Caroline Jelimo",
    },
    {
      name: "application-name",
      content: "Caroline Jelimo",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "keywords",
      content: "Caroline Jelimo, Kenyan female athlete, Iten runner, 10000m specialist, Kenya Prisons, women's distance running Kenya, Rift Valley champion, Athletics Kenya"
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
      href: "/apple-touch-icon-caroline.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#ec4899", // Pink-500 color
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
  "name": "Caroline Jelimo",
  "description": "Elite Kenyan long-distance runner specializing in 10,000m and 5,000m events. Trains in Iten, Kenya at 2,400m altitude.",
  "url": "https://carolinejelimo.com",
  "image": "https://carolinejelimo.com/profile-caroline.jpg",
  "sameAs": [
    "https://twitter.com/carolinejelimo",
    "https://instagram.com/carolinejelimo",
    "https://facebook.com/carolinejelimo"
  ],
  "jobTitle": "Professional Long-Distance Runner",
  "worksFor": {
    "@type": "Organization",
    "name": "Kenya Priskes Services"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Athletics Kenya"
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
    "10,000 metres running", 
    "5,000 metres running", 
    "Track and Field", 
    "Altitude Training Methodology", 
    "Kenyan Distance Running", 
    "Women's Athletics",
    "Endurance Sports"
  ],
  "nationality": {
    "@type": "Country",
    "name": "Kenya"
  },
  "gender": "Female",
  "sport": ["10,000 metres", "5,000 metres", "Cross country running"],
  "award": [
    "Kenyan National Championships Medalist",
    "African Cross Country Championships Competitor",
    "World Athletics Continental Tour Winner"
  ],
  "height": "165 cm",
  "weight": "48 kg",
  "coach": {
    "@type": "Person",
    "name": "Patrick Sang (advisory)"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "World Athletics ID",
    "value": "14912345"
  },

};

// Philanthropy structured data
export const philanthropicStructuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Rift Valley Girls Running Project",
  "description": "Initiative founded by Caroline Jelimo supporting young female athletes in Iten, Kenya with running shoes, educational scholarships, and training access.",
  "url": "https://carolinejelimo.com/girls-running-project",
  "founder": {
    "@type": "Person",
    "name": "Caroline Jelimo"
  },
  "location": {
    "@type": "Place",
    "name": "Iten, Kenya"
  },
  "areaServed": "Elgeyo-Marakwet County, Rift Valley, Kenya",
  "purpose": "Empowering young female athletes through sport and education"
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
