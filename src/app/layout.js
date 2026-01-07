import { Sora } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
// import { ToastContainer } from "react-toastify";
import { CategoryProvider } from "@/context/categoryContext";
import { system } from "./theme";

// import "react-toastify/dist/ReactToastify.css";
// import "../styles/globals.css";
import "./globals.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import LenisWrapper from "@/components/LenisWrapper";

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
  metadataBase: new URL("https://kpoproad.io"),

  title: {
    default: "Kuvaartlabs- K-POP Web3 Platform | Vote for Your Favorite Idols",
    template: "%s | Kpop Road",
  },

  description:
    "K-POP ROAD is a next-generation Web3 platform designed to connect global fans with K-POP artists. Vote for idols, participate in auditions, and earn rewards in the ultimate K-pop fan community.",

  keywords: [
    "Kpop",
    "K-pop",
    "Korean pop",
    "idols",
    "voting",
    "auditions",
    "Web3",
    "blockchain",
    "NFT",
    "fan community",
    "Korean music",
    "entertainment",
    "아이돌",
    "케이팝",
  ],

  authors: [{ name: "Kpop Road", url: "https://kpoproad.io" }],
  creator: "Kpop Road",
  publisher: "KuvaartlabsPlatform",
  generator: "Next.js",

  applicationName: "Kpop Road",

  referrer: "origin-when-cross-origin",

  colorScheme: "light dark",

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
    canonical: "https://kpoproad.io",
    languages: {
      "en-US": "https://kpoproad.io/en",
      "ko-KR": "https://kpoproad.io/ko",
      "ja-JP": "https://kpoproad.io/ja",
      "zh-CN": "https://kpoproad.io/zh",
    },
    types: {
      "application/rss+xml": "https://kpoproad.io/feed.xml",
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
    url: "https://kpoproad.io",
    siteName: "Kpop Road",
    title: "Kuvaartlabs- K-POP Web3 Platform | Vote for Your Favorite Idols",
    description:
      "Join the ultimate K-pop fan community. Vote for your favorite idols, participate in auditions, and earn rewards on our Web3 platform.",
    images: [
      {
        url: "/welcome-banner-1200x600.png",
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
      me: ["contact@kpoproad.io", "https://kpoproad.io"],
      "naver-site-verification": "496e1462dfb901aaaaf9f8d32e0348a5bceb0ee2",
    },
  },

  appLinks: {
    web: {
      url: "https://kpoproad.io",
      should_fallback: true,
    },
  },

  bookmarks: ["https://kpoproad.io/favorites"],
  archives: ["https://kpoproad.io/archives"],
  assets: ["https://kpoproad.io/assets"],

  other: {
    "msapplication-TileColor": "#f9e2e3",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Kpop Road",
    "mobile-web-app-capable": "yes",
    "theme-color": "#f9e2e3",
    google: "notranslate",
    "google-play-app": "app-id=io.kpoproad.app",
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "your-facebook-page-id",
    "article:author": "https://www.facebook.com/kpoproad",
    "article:publisher": "https://www.facebook.com/kpoproad",
  },
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

          {/* <ToastContainer
            position="top-center"
            autoClose={4000}
            newestOnTop
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
