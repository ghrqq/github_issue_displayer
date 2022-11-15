import React from "react";
import Head from "next/head";

const HeadElement = () => {
  return (
    <Head>
      <title>Theo&apos;s Issue Displayer</title>
      <meta name="description" content="Displays React issues." />
      <link rel="icon" href="/favicon.ico" /> {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://theo-s-issue-displayer.vercel.app/"
      />
      <meta
        property="og:title"
        content="Theo's GitHub issue displayer for React.js"
      />
      <meta
        property="og:description"
        content="Theo's GitHub issue displayer for React.js"
      />
      <meta
        property="og:image"
        content="https://theo-s-issue-displayer.vercel.app/meta.png"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://theo-s-issue-displayer.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Theo's GitHub issue displayer for React.js"
      />
      <meta
        property="twitter:description"
        content="Theo's GitHub issue displayer for React.js"
      />
      <meta property="twitter:image" content="/meta.png" />
    </Head>
  );
};

export default HeadElement;
