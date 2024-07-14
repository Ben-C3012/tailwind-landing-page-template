// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const logoForSocialURL = '@public/images/logoSocialDimentions.png';
    return (
      <Html>
        <Head>
        <meta property="og:title" content="סייבר דרים" />
        <meta property="og:description" content="הדרכות סייבר ופיתוח לחברות, ארגונים ומוסדות חינוך" />
        <meta property="og:image" content= {logoForSocialURL} />
        <meta property="og:url" content={'https://www.cyberdreamedu.com'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
