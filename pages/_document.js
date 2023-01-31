import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="eng">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* //title  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://accounts.google.com/gsi/client"
          async
          defer
          strategy="beforeInteractive"
        />
      </Head>

      <body style={{ fontFamily: "Ubuntu" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
