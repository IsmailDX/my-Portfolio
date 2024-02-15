import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ismail",
  description: "A website about Ismail and his work",
  openGraph: {
    title: "Ismail",
    description: "this is the desciption",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Title webtsite",
    description: "this is the desciption",
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
