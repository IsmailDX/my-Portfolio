import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ismail's Portfolio",
  description: "Checkout Ismail's amazing portfolio",
  openGraph: {
    title: "Ismail's Portfolio",
    description: "Checkout Ismail's amazing portfolio",
    image: "url/image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ismaildx",
    title: "Ismail's Portfolio",
    description: "Checkout Ismail's amazing portfolio",
    image: "/images/webIcon.png",
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
