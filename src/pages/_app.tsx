import App from "next/app"
import Head from "next/head"
import SEO from "../app/data/js/seo"

import React from "react"
type AppProps = {
  Component: React.ReactNode
  pageProps: any
}
export default class CustomApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{SEO.index.title}</title>
          <meta name="description" content={SEO.index.desc} />
          <meta name="keywords" content={SEO.index.keywords} />
          <meta property="og:locale" content={SEO.index.locale} />
          <meta property="og:title" content={SEO.index.title} />
          <meta property="og:description" content={SEO.index.desc} />
          <meta property="og:image" content={SEO.index.image} />
          <meta property="og:url" content={SEO.index.canonical} />
          <link rel="canonical" href={SEO.index.canonical} />
          <meta property="og:locale" content={SEO.index.locale} />
          <meta property="og:title" content={SEO.index.title} />
          <meta property="og:description" content={SEO.index.desc} />
          <meta property="og:image" content={SEO.index.image} />
          <meta property="og:url" content={SEO.index.canonical} />
          <link
            href="https://plus.google.com/+hebertsoftware"
            rel="publisher"
          />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content={SEO.index.distribution} name="distribution" />
          <meta content={SEO.index.rating} name="rating" />
          <meta content={SEO.index.type} property="og:type" />
          <meta content={SEO.index.title} property="og:site_name" />
          <meta content={SEO.index.locale} property="og:locale" />
          <meta content={SEO.index.locale} property="og:locale:alternate" />
          <meta content={SEO.index.title} property="og:title" />
          <meta content={SEO.index.canonical} property="og:url" />
          <meta content={SEO.index.desc} property="og:description" />

          <meta content={SEO.index.creator} name="twitter:creator" />
          <meta content={SEO.index.domain} name="twitter:domain" />
          <meta content={SEO.index.image} property="og:image" />
          <meta content="1200" property="og:image:width" />
          <meta content="720" property="og:image:height" />
          <meta content={SEO.index.country} name="geo.country" />
          <meta content={SEO.index.placename} name="geo.placename" />
          <link
            href={SEO.index.canonical}
            hrefLang="x-default"
            rel="alternate"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
