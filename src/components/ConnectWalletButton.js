import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectWalletButton = () => {
  const [isKaikasConnected, setIsKaikasConnected] = useState(false);

  const connectKaikasWallet = async () => {
    try {
      if (window.klaytn && window.klaytn.enable) {
        const accounts = await window.klaytn.enable();
        if (accounts.length > 0) {
          setIsKaikasConnected(true);
          toast.success("Connected with Kaikas", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        toast.error("Kaikas wallet not found", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Failed to connect Kaikas wallet:", error);
      toast.error("Failed to connect with Kaikas", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      {isKaikasConnected ? (
        <p>Connected with Kaikas</p>
      ) : (
        <button onClick={connectKaikasWallet}>Connect Kaikas</button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
