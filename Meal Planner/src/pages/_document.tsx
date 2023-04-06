import NavBar from '@/Components/NavBar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar></NavBar>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
