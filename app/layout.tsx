import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Animal Haven | Rescue, adoption and compassionate care",
    template: "%s | Animal Haven",
  },
  description:
    "Animal Haven is a compassionate rescue and adoption organization helping animals find safe, loving homes.",
  openGraph: {
    title: "Animal Haven",
    description:
      "Rescue, adoption, foster care, volunteer opportunities, and community support for animals in need.",
    url: "https://example.com",
    siteName: "Animal Haven",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Dog being comforted outdoors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal Haven",
    description:
      "Rescue, adoption, foster care, volunteer opportunities, and community support for animals in need.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 text-stone-900">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17743648629"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17743648629');
          `}
        </Script>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
