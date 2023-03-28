import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const getWeb3 = async () => {
  let web3;
  const connectedWallet = localStorage.getItem("connectedWallet");
  // console.log("connectedwallet", connectedWallet);

  if (connectedWallet === "walletConnect") {
    const bscChainId = parseInt(process.env.NEXT_PUBLIC_BSCT_CHAINID);
    const ethChainId = parseInt(process.env.NEXT_PUBLIC_ETH_CHAINID);
    const bscRpc = process.env.NEXT_PUBLIC_BSCT_RPC;
    const ethRpc = process.env.NEXT_PUBLIC_ETH_RPC;

    const provider = new WalletConnectProvider({
      rpc: {
        [bscChainId]: bscRpc,
        [ethChainId]: ethRpc,
      },
    });
    await provider.enable();
    // console.log("wproveider", provider);
    web3 = new Web3(provider);
    web3.pollingInterval = 15000;
  } else if (connectedWallet === "metamask") {
    const { ethereum } = window;
    let provider = ethereum;
    if (ethereum.provider) {
      provider = ethereum.provider.find(({ isMetMask }) => isMetMask);
    }

    // console.log("mproveider", provider);
    await provider.enable();
    web3 = new Web3(provider);
  }

  return web3;
};
export default getWeb3;
