import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ismail's Portfolio Website",
  description: "A website about Ismail and his work",
  openGraph: {
    title: "Ismail | Portfolio",
    description: "A website about Ismail and his work",
    images: "url/image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ismail",
    title: "Ismail | Portfolio",
    description: "A website about Ismail and his work",
    images: "url/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
