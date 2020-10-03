import * as React from "react"

import Document, { Head, Html, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2R5GX2WYQC');
      `
    }
  }
  render() {
    const { styleTags } = this.props
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/1fb9726ed9.js"></script>
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-2R5GX2WYQC"
            />
            {/* We call the function above to inject the contents of the script tag */}
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </>
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
