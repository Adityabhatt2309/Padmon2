import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const bscChainId = parseInt(process.env.NEXT_PUBLIC_BSCT_CHAINID);
const ethChainId = parseInt(process.env.NEXT_PUBLIC_ETH_CHAINID);
const bscRpc = process.env.NEXT_PUBLIC_BSCT_RPC;
const ethRpc = process.env.NEXT_PUBLIC_ETH_RPC;

const POLLING_INTERVAL = 15000;
export const injected = new InjectedConnector({
    // supportedChainIds: [bscChainId, ethChainId],
  });

  export const walletconnect = new WalletConnectConnector({
    rpc: {
      [bscChainId]: bscRpc,
      [ethChainId]: ethRpc,
    },
    qrcode: true,
    // chainId: ChainIDinString,
    pollingInterval: POLLING_INTERVAL,
    bridge: "https://bridge.walletconnect.org",
    // supportedChainIds: [ChainIDinString],
  });

  