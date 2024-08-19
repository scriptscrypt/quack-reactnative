import { Action, useAction, type ActionAdapter } from "@dialectlabs/blinks";
import { Blink } from "@dialectlabs/blinks-react-native";
import { PublicKey } from "@solana/web3.js";
import type React from "react";

function getWalletAdapter(): ActionAdapter {
  return {
    connect: async (_context) => {
      console.log("connect");
      return PublicKey.default.toString();
    },
    signTransaction: async (_tx, _context) => {
      console.log("signTransaction");
      return {
        signature: "signature",
      };
    },
    confirmTransaction: async (_signature, _context) => {
      console.log("confirmTransaction");
    },
    metadata: {
      supportedBlockchainIds: ["solana"],
    },
  };
}

export const BlinksLayoutScreen: React.FC<{
  url: string;
}> = ({ url }: { url: string }) => {
  const adapter = getWalletAdapter();
  const { action } = useAction({ url, adapter });
  console.log(`action:`);
  console.log(action);

  if (!action) {
    return <>{/* <Text> Blink Loading </Text> */}</>;
  }
  const actionUrl = new URL(url);
  console.log(actionUrl);
  return (
    <>
      {action && (
        <Blink
          stylePreset="x-dark"
          theme={{
            "--blink-button": "#1D9BF0",
            "--blink-border-radius-rounded-button": 9999,
          }}
          action={action as Action}
          websiteUrl={actionUrl.href}
          websiteText={actionUrl.hostname}
        />
      )}
    </>
  );
};
