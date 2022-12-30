import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutPage from "../src/components/commons/layout/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  );
}
