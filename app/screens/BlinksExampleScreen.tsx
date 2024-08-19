// import { StyleSheet, Text, View } from "react-native";

// export default function BlinksScreen() {
//   return (
//     <>
//       <View>
//         <Text style={styles?.titleContainer}>Blinks</Text>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8,
//   },
// });

import { Action, useAction, type ActionAdapter } from "@dialectlabs/blinks";
import { Blink } from "@dialectlabs/blinks-react-native";
import { PublicKey } from "@solana/web3.js";
import type React from "react";
import { Text } from "react-native";

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

export const BlinksExampleScreen: React.FC<{
  url: string; // could be action api or website url
}> = ({ url }: { url: string }) => {
  const adapter = getWalletAdapter();
  const { action } = useAction({ url, adapter });

  if (!action) {
    return (
      <>
        <Text> Blink Loading </Text>
      </>
    );
  }
  const actionUrl = new URL(url);
  return (
    <>
      <Blink
        theme={{
          "--blink-button": "#1D9BF0",
          "--blink-border-radius-rounded-button": 9999,
        }}
        action={action as Action}
        websiteUrl={actionUrl.href}
        websiteText={actionUrl.hostname}
      />
    </>
  );
};
