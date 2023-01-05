import "../styles/globals.css";
import { WalletContextWrapper } from "../context/WalletContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WalletContextWrapper>
        <Component {...pageProps} />
      </WalletContextWrapper>
    </>
  );
}
