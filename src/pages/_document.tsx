import * as React from "react"

import Document, {
  Head,
  Html,
  Main,
  NextScript
} from "next/document"

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>
}

export default class CustomDocument extends Document<DocumentProps> {
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
  public render() {
    const { styleTags } = this.props
    return (
      <Html>
        <Head>
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
