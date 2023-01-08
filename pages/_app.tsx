import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutPage from "../src/components/commons/layout/index";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
