import { Sora } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { CategoryProvider } from "@/context/categoryContext";
import { system } from "./theme";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  metadataBase: new URL("https://www.kuvaartlabs.com"),

  title: {
    default: "Kuvaartlabs Web3 Platform | For ART",
    template: "%s | Kuvaartlabs Web3 Platform FOR ART",
  },

  description: "Kuvaartlabs FOR ART",

  keywords: [
    "Kuvaartlabs",
    "ART",
    "Web3",
    "blockchain",
    "NFT",
    "entertainment",
    "아이돌",
    "케이팝",
  ],

  authors: [{ name: "Kuvaartlabs", url: "https://www.kuvaartlabs.com" }],
  creator: "Kuvaartlabs",
  publisher: "Kuvaartlabs Platform",
  generator: "Next.js",

  applicationName: "Kuvaartlabs Web3 Platform",

  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  category: "entertainment",
  classification: "Entertainment, Music, K-pop, Web3",

  alternates: {
    canonical: "https://www.kuvaartlabs.com",
    languages: {
      "en-US": "https://www.kuvaartlabs.com/en",
      "ko-KR": "https://www.kuvaartlabs.com/ko",
      "ja-JP": "https://www.kuvaartlabs.com/ja",
      "zh-CN": "https://www.kuvaartlabs.com/zh",
    },
    types: {
      "application/rss+xml": "https://www.kuvaartlabs.com/feed.xml",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    url: "https://www.kuvaartlabs.com",
    siteName: "Kuvaartlabs",
    title: "Kuvaartlabs Web3 Platform",
    description:
      "Kuvaartlabs is the ultimate K-pop Web3 platform that connects fans and artists through blockchain technology, NFTs, and immersive experiences.",
    images: [
      {
        url: "/welcome_banner_1200x600.png",
        width: 1200,
        height: 600,
        alt: "Kuvaartlabs- The Ultimate K-pop Web3 Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  verification: {
    other: {
      me: ["contact@kpoproad.io", "https://www.kuvaartlabs.com"],
      "naver-site-verification": "496e1462dfb901aaaaf9f8d32e0348a5bceb0ee2",
    },
  },

  appLinks: {
    web: {
      url: "https://www.kuvaartlabs.com",
      should_fallback: true,
    },
  },

  bookmarks: ["https://www.kuvaartlabs.com/favorites"],
  archives: ["https://www.kuvaartlabs.com/archives"],
  assets: ["https://www.kuvaartlabs.com/assets"],

  other: {
    "msapplication-TileColor": "#f9e2e3",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Kpop Road",
    "mobile-web-app-capable": "yes",
    google: "notranslate",
    "google-play-app": "app-id=io.kpoproad.app",
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "your-facebook-page-id",
    "article:author": "https://www.facebook.com/kpoproad",
    "article:publisher": "https://www.facebook.com/kpoproad",
  },
};

// ✅ Viewport export cho Next.js v16
export const viewport = {
  colorScheme: "light dark",
  themeColor: "#f9e2e3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="shortcut icon" content="shortcut icon" />
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body cz-shortcut-listen="true">
        <ChakraProvider value={system}>
          <LenisWrapper>
            <CategoryProvider>
              <Header />
              {children}
              <Footer />
            </CategoryProvider>
          </LenisWrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
