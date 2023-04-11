import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Provider } from "react-redux";
import store from "./getMealPlans/recipesState";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NavBar />

        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Provider>
    </>
  );
}
