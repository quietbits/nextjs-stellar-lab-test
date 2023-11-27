"use client";

import { useState } from "react";
import { getStellarAccountInfo } from "../lib/getStellarAccountInfo";

export const StellarAccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState("");

  const handleClick = async () => {
    const info = await getStellarAccountInfo();
    setAccountInfo(info);
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Stellar Account</button>
      {accountInfo ? <div>{accountInfo}</div> : null}
    </div>
  );
};
