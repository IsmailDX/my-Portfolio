import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Ismail's Portfolio",
  description:
    "A website dedicated to Ismail, showcasing his accomplishments and endeavors. Ismail is renowned for his remarkable achievements and ability to overcome challenges. However, in truth, he humbly acknowledges himself as an ordinary individual.",
  metadataBase: new URL("https://ismaildx.vercel.app/"),
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
      <GoogleAnalytics gaId="G-TED0MEJN8P" />
    </html>
  );
}
