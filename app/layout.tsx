import type { Metadata } from 'next'
import './globals.css'
import { StoreProvider } from '@/redux/StoreProvider'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Ismail | Portfolio',
    description: 'A website about Ismail and his work',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </StoreProvider>
            </body>
        </html>
    )
}
