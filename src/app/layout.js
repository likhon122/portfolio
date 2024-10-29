import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

// Components import
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jet-Brains-mono"
});

// Dynamic metadata generation
export async function generateMetadata() {
  return {
    title: "Likhon Islam | Full Stack Developer",
    description:
      "Likhon Islam is a professional Full Stack Developer with expertise in React, Node.js, Next.js, and MERN stack. Contact for web development services.",
    keywords:
      "Likhon Islam, Full Stack Developer, React Developer, Next.js Developer, MERN Stack, Software Engineer",
    applicationName: "Portfolio - Likhon Islam",
    viewport: "width=device-width, initial-scale=1.0",

    openGraph: {
      type: "website",
      url: "https://likhonislam.me",
      title: "Likhon Islam | Full Stack Developer",
      description:
        "Portfolio of Likhon Islam, a Full Stack Developer specializing in modern web technologies like React, Node.js, Next.js, and the MERN stack.",
      images: [
        {
          url: "/public/images/portfolio-thumbnail.png", // Add the appropriate image path
          width: 1200,
          height: 630,
          alt: "Portfolio Thumbnail"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Likhon Islam | Full Stack Developer",
      description:
        "Get in touch with Likhon Islam, an expert Full Stack Developer. Check out his portfolio for more details.",
      images: [
        {
          url: "/public/images/portfolio-thumbnail.png" // Ensure an image exists for better Twitter sharing previews
        }
      ]
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="FFSZ26lzvssfPv4Ur9tSc5DUiq8makkJsUf3HgF012M"
        />
      </head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
