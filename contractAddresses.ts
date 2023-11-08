/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { bitrock } from "@thirdweb-dev/chains";
export const NETWORK = bitrock;

// 2. The address of the marketplace V3 smart contract.
export const MARKETPLACE_ADDRESS = "0x6C37757487C60118a8390cC96779C59B7BabB4C3";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x04def64aa8cB6CbC0D223f9e1c94d26eaa7e2AB2";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://explorer.bit-rock.io";
