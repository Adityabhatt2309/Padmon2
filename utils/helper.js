import { networkSwitcher } from "./networkSwitcher";
import Web3 from "web3";

// export const converttoEther = (web3, amount, decimal) => {
//   if (decimal === 9) {
//     var gwei = web3.utils.toBN(amount).toString();
//     var tokens = web3.utils.toWei(gwei, "Gwei");
//     return Number(web3.utils.fromWei(tokens, "ether"));
//   }

//   if (decimal === 18) {
//     var tokens = web3.utils.toBN(amount).toString();
//     return Number(web3.utils.fromWei(tokens, "ether"));
//   }
// };

export const handleNetwork = (coin, chain) => {
  if (coin === "ETH" || coin === "USDT") {
    const ethID = process.env.NEXT_PUBLIC_ETH_CHAINID;
    if (chain === ethID) {
      return;
    } else {
      networkSwitcher(ethID);
      return;
    }
  } else if (coin === "BNB" || coin === "BUSD" || coin == "USDTbnb") {
    const bscID = process.env.NEXT_PUBLIC_BSCT_CHAINID;
    if (chain === bscID) {
      return;
    } else {
      networkSwitcher(bscID);
      return;
    }
  }
};

// export const BUY_TOKENS = ["ETH", "USDT", "BNB", "BUSD", "USDTbnb"];

export const CONTRACT_ADDRESS = {
  USDT: process.env.NEXT_PUBLIC_ICO_ETH_ADDRESS,
  BUSD: process.env.NEXT_PUBLIC_ICO_BSCT_ADDRESS,
  USDTbnb: process.env.NEXT_PUBLIC_ICO_BSCT_ADDRESS,
};


export const ERC20_TOKENS = ["USDT", "BUSD", "USDTbnb"];




