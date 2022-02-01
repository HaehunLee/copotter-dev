import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Boiler Plate</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme.default}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
