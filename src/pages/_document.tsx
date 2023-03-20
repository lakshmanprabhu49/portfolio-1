import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orelega+One&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Orelega+One&family=Rambla:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Palatino+Linotype" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Times+New+Roman" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Rakkas" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
