import React from "react";
import Head from "next/head";

const HeadElement = () => {
  return (
    <Head>
      <title>Theo&apos;s Issue Displayer</title>
      <meta name="description" content="Displays React issues." />
      <link rel="icon" href="/favicon.ico" /> {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="Theo's DWD Client" />
      <meta
        property="og:description"
        content="A beautiful web app to query and display historical weather data of DWD OpenData."
      />
      <meta property="og:image" content="/meta.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="Theo's DWD Client" />
      <meta
        property="twitter:description"
        content="A beautiful web app to query and display historical weather data of DWD OpenData."
      />
      <meta property="twitter:image" content="/meta.png" />
    </Head>
  );
};

export default HeadElement;
