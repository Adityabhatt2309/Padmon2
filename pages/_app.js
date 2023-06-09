import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import { useNetwork, useSwitchNetwork } from 'wagmi'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, bsc, bscTestnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  // [mainnet, polygon, optimism, arbitrum,bsc],
  [bsc,bscTestnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }) {
  const { chain } = useNetwork()
  return (
    <>
       <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider>
      </WagmiConfig>
      <Footer/>
    </>
  )
}
