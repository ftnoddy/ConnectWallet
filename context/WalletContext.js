import React, { createContext ,useContext, useState } from "react";

const WalletConext = createContext();

export const WalletContextWrapper = ({ children }) => {
  const [text, setText] = useState("noddy");
  let shearedState = { text };
  return (
    <>
      {" "}
      <WalletConext.Provider value={shearedState}>
        {children}
      </WalletConext.Provider>
    </>
  );
};
export function useWalletContext() {
  return useContext(WalletConext);
}
