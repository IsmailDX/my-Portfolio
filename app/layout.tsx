import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Ismail's Portfolio",
  description: "Checkout Ismail's amazing portfolio",
  openGraph: {
    title: "Ismail's Portfolio",
    description: "Checkout Ismail's amazing portfolio",
    type: "website",
    url: "https://ismaildx.vercel.app/",
    images: ["/images/webIcon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail's Portfolio",
    description: "Checkout Ismail's amazing portfolio",
    images: ["/images/webIcon.png"],
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
