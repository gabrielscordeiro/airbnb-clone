import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import Modal from "@/app/components/modals/Modal";

const font = Nunito({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal
            isOpen
            title="Hello World"
            actionLabel="Submit"
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
