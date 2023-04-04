import { useMemo } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const usePools = (
    address = undefined,
    ABI,
    withSignerIfPossible = true,
    chainId
) => {
    const {library} = useWeb3React();
    let _web3;
    if(typeof window !== "undefined"){
        const {ethereum} = window;
        if(library){
            _web3 = window.Web3;
        }else{
            if(chainId === process.env.NEXT_PUBLIC_BSCT_CHAINID){
                _web3 = new Web3(
                    new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_BSCT_RPC)
                );
            }else{
                _web3 = new Web3(
                    new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_ETH_RPC)
                );
            }
        }
    }
    return useMemo(() => {
        if (!address || !ABI) return null;
        try {
          const contractInstance = new _web3.eth.Contract(ABI, address);
          //console.log("contractInstance",contractInstance);
          return contractInstance;
        } catch (error) {
          console.error("Failed to get contract", error);
          return null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [library, address]);
}

export default usePools;
