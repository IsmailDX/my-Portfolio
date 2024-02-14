import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL("https://ismaildx.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Ismail's Portfolio",
    description: "The React Framework for the Web",
    url: "https://ismaildx.vercel.app/",
    siteName: "Ismail's Portfolio",
    type: "website",
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
