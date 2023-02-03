import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../components/layout/Footer";
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

export default function App({ Component, pageProps }: AppProps) {
  return <PortfolioProvider value={{ prefix }}>
    <ThemeProvider>
      <Head>
        <title>Archiving for Hannah</title>
        <meta name="description" content="Generated by Hannah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  </PortfolioProvider>
}
