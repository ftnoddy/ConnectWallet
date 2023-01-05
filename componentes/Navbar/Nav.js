import React from "react";

export const Nav = () => {
  return (
    <>
      <div className="bg-red-500 p-8">
        <div className="flex">
          <div>
            <img
              style={{ width: "100px" }}
              src="https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10108949-stock-photo-blue-flame-logo.jpg"
            />
          </div>
          <div>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </>
  );
};
