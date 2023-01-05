import React from "react";
import {Nav} from "../componentes/Navbar/Nav"
import { useWalletContext } from "../context/WalletContext";

export default function Home() {
  const { text, setText } = useWalletContext();
  return (
    <>
      {/* <button>{text}</button> */}
      <Nav/>
    </>
  );
}
