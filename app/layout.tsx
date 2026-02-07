import type React from "react";
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingContactButton } from "@/components/floating-contact-button";
import Script from "next/script";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "NAVI IT School – Future Creators, Not Just Users",
  description:
    "Online IT education center for kids aged 10–17. Learn HTML, CSS, JavaScript, React, and AI skills through gamified learning.",
  keywords: [
    "IT school",
    "coding for kids",
    "programming education",
    "learn React",
    "AI for kids",
  ],
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#4a7fc1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} font-sans antialiased`}>
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1858627604797333');
      fbq('track', 'PageView');
    `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1858627604797333&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <FloatingContactButton />
        <Analytics />
      </body>
    </html>
  );
}
