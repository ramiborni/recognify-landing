import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Recognify - Every Remote Team member should be recognized",
  description: "Recognify is a platform that helps remote teams to recognize their team members",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >
        {children}
      </body>
    </html>
  );
}
