import Document, { Head, Main, NextScript } from "next/document";
import { Global, css } from "@emotion/core";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <Global
            styles={css`
              html,
              body,
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: sans-serif;
              }
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
