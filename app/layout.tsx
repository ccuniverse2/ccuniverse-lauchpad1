import './globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';

import type { Metadata } from 'next';
import {
  Montserrat,
  Rubik,
} from 'next/font/google';

import Header from '@components/Header';
import Loader from '@components/Loader';
import Provider from '@providers/Provider';

export const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  variable: "--Montserrat",
});

export const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  variable: "--Rubik",
});

export const metadata: Metadata = {
  title: "CoolCriminal Universe | Launchpad",
  description:
    "An Official Launchpad from CoolCriminal Universe. Launchpad to showcase Projects and launch tokens & mint NFT's.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${rubik.variable} font-rubik relative`}
      >
        <Provider
          attribute="data-theme"
          storageKey="sol-launchpad-theme"
          defaultTheme="dark"
        >
          <Header />
          {children}
          <Loader />
        </Provider>
      </body>
    </html>
  );
}
