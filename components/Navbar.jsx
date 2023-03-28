import Header from './Header/Header';
// import styles from '../styles/Nav.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useWeb3React } from "@web3-react/core";

import React, { useState, useEffect, useRef, useContext } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
// import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "@/utils/connecter";
// import { PromoContext } from "../Index";
import { GlobalContext } from "../components/context/Context";
import { networkSwitcher } from "@/utils/networkSwitcher";
import { useEagerConnect, useInactiveListener } from "@/hooks";
import getWeb3 from "../getweb3";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { openConnectModal, toggleModalHandler } = useContext(GlobalContext);
    const { connector, account, active, activate, chainId } = useWeb3React();
    const [activatingConnector, setActivatingConnector] = useState();
    const onboarding = useRef();

    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager || !!activatingConnector);
    // const {
    //     openModal,
    //   } = useContext(GlobalContext);
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
          setActivatingConnector(undefined);
        }
      }, [activatingConnector, connector]);

      useEffect(() => {
        if (active) localStorage.setItem("shouldEggerConnect", "true");
      }, [active]);

      useEffect(() => {
        const assignWeb3 = async () => {
          window.web3 = await getWeb3();
        };
        if (account) {
          assignWeb3();
        }
      }, [account]);

      const onConnectToMetamaskFunc = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          setActivatingConnector(injected);
          activate(injected, undefined, true)
            .then(() => console.log("Connected Successfully"))
            .catch((e) => console.log("Something went worng", e));
          localStorage.setItem("connectedWallet", "metamask");
        } else {
          onboarding.current.startOnboarding();
        }
      };

      useEffect(() => {
        if (
          ((chainId === 80001 || chainId === 97) && account) ||
          typeof chainId === "undefined"
        ) {
          // do nothing
        } else {
          alert("Mooky only support Ethereum and Binance network");
          networkSwitcher();
        }
      }, [chainId]);
    
      useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          if (account && account.length > 0) {
            onboarding?.current?.stopOnboarding();
          }
        }
      }, [account]);

      useEffect(() => {
        if (!onboarding.current) {
          onboarding.current = new MetaMaskOnboarding();
        }
      }, []);


  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);


  const onConnectWithWalletConnect = () => {
    setActivatingConnector(walletconnect);
    activate(walletconnect, undefined, true).catch((err) => {
      setActivatingConnector();
      walletconnect.walletConnect1Provider = undefined;
      localStorage.removeItem("connectedWallet");
      if (err) {
        console.log("error", err);
        // window.location.reload(false);
      }
    });
    localStorage.setItem("connectedWallet", "walletConnect");
  };

  useEffect(() => {
    const assignWeb3 = async () => {
      window.web3 = await getWeb3();
    };
    if (account) {
      assignWeb3();
    }
  }, [account]);


    return (
        <div>
                <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <a href="#"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                            </div>

                            <div className="header-right">
                                <ul>
                                    <li><a href="/">features</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/launchpad">ido launchpad</a></li>
                                    <li><a href="https://padmondao.gitbook.io" target="_blank">whitepaper</a></li>
                                    <div className="clear"></div>					</ul>
                            </div>
                            <div className="header-right-1">
                                <span>
                                    <img src="/assets/group-1.png" style={{cursor:"pointer"}}
                                    onConnectToMetamaskFunc={onConnectToMetamaskFunc}
                                    toggleModalHandler={toggleModalHandler}
                                    onConnectWithWalletConnect={onConnectWithWalletConnect}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="mobile-area">
                    <div className="container">
                        <div className="mobile-logo">
                            <a href="/"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                        </div>

                        <div className="mobile-menu" onClick={()=>{setIsOpen(!open)}}>
                        {
                                show?<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px"}} onClick={()=>{setShow(!show)}}><AiOutlineClose className='hamburger'/></span>:<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px" }} onClick={()=>{setShow(!show)}}><AiOutlineMenu className='hamburger'/></span>
                            } 
                        </div>
                    </div>
                    
                    {
                            show?<div id="myNav" className="overlay">
                            <div className="overlay-content">
                                <a href="/">Game</a>
                                <a href="/nft">NFTs</a>
                                <a href="https://padmondao.gitbook.io" target="_blank">whitepaper</a>
                                <a href="/">Unlock wallet</a>
                            </div>
                        </div>	:""
                            }
                </div>
                
                
            </div>
    )
}
export default Navbar