import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../common/context/AppContext";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <ContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ContextProvider>
  );
}

export default MyApp;
