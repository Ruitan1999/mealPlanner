import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Provider } from "react-redux";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  
        <NavBar />

        <main>
          <Component {...pageProps} />
        </main>
        <Footer />

    </>
  );
}
