import Head from "next/head";
import NabvarHead from "./navbar";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NabvarHead />
        <main>{children}</main>
    </>
  );
}

