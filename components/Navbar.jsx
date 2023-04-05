import Header from './Header/Header';
// import styles from '../styles/Nav.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

import React, { useState, useEffect, useRef, useContext, use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { AiOutlineClose } from 'react-icons/ai';
// import ConnectButton  from "@rainbow-me/rainbowkit";





const Navbar = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const { openConnectModal, toggleModalHandler } = useContext(GlobalContext);
    // const { connector, account, active, activate, chainId } = useWeb3React();
    const [activatingConnector, setActivatingConnector] = useState();
    // const onboarding = useRef();
    // const accountDetails = account;
    const [showModel,setShowModel]= useState(false);

  
  


    return (
        <div style={{color:"white"}}>
                <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <Link href=""><img src="/assets/padmondaoblueoutline-1.png" /></Link>
                            </div>

                            <div className="header-right">
                                <ul>
                                    <li><Link href="/">features</Link></li>
                                    <li><Link href="/">Projects</Link></li>
                                    <li><Link href="/launchpad">ido launchpad</Link></li>
                                    <li><Link href="https://padmondao.gitbook.io" target="_blank">whitepaper</Link></li>
                                    
                                    <div className="clear">
                                      </div>		
                                    		</ul>
                            </div>
                            <div className="header-right-1">
                                <ConnectButton/>	
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="mobile-area">
                    <div className="container">
                        <div className="mobile-logo">
                            <Link href="/"><img src="/assets/padmondaoblueoutline-1.png" /></Link>
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
                                <Link href="/">Game</Link>
                                <Link href="/nft">NFTs</Link>
                                <Link href="https://padmondao.gitbook.io" target="_blank">whitepaper</Link>
                                {/* <Link href="/">Unlock wallet</Link> */}
                                <ConnectButton/>
                            </div>
                        </div>	:""
                            }
                </div>

                {
                  showModel?<>
                <div className='model_wallet'>
        <div className="container mx-auto ">
          <div className="border-4 my-2 p-4 xl:p-[2rem] text-center h-[750px] bg-[#FFEEB0] mx-auto   rounded-[87px] border-b-[12px] shadow-2xl border-[#D38844] w-[80%] max-w-[1200px]">
            <div>
              <div className="flex items-center mx-auto justify-between  xl:gap-12 px-5  ">
                {accountDetails ? (
                  <div className="xl:w-1/2 w-full">
                      {/* <button className='wallet_btn'>Disconnect</button> */}
                  </div>
                  ) : (
                  <div className="xl:w-1/2 w-full">
                    <div className='' style={{color:"black",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <h1 style={{color:"black",textAlign:"center",padding:"12px"}}>Select Wallet</h1>
                    <AiOutlineClose style={{fontSize:"20px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>{setShowModel(!showModel)}}/>
                    </div>
                    <div className="  grid  xl:grid-cols-2 lg:grid-cols-1 lg:gap-2 lg:bg-[#fff5dc] bg-[#FFEEB0]  rounded-[80px]  lg:border-[#D38844] xl:p-12 my-2">
                      <div
                        className="main_model_div my-2 cursor-pointer transition-all hover:shadow-2xl"
                        onClick={onConnectToMetamaskFunc}
                      >
                        <Image
                          className="image_wallet"
                          src="/assets/images/walletImages/metamask 1.png"
                          alt="metamask"
                          width={100}
                          height={50}
                        />
                        <button className="wallet_btn">MetaMask</button>
                      </div>
                      <div
                        className=" main_model_div flex flex-col justify-evenly transition-all cursor-pointer hover:shadow-2xl "
                        onClick={onConnectWithWalletConnect}
                      >
                        <Image
                          className="image_wallet"
                          src="/assets/images/walletImages/Vector.png"
                          alt="metsmask"
                          width={120}
                          height={100}
                        />
                        <button className="wallet_btn">
                          Wallect conntect
                        </button>
                      </div>
                      <div
                        className="main_model_div my-2 lg:mb-0 cursor-pointer transition-all hover:shadow-2xl shadow-orange-400"
                        onClick={onConnectToMetamaskFunc}
                      >
                        <Image
                          className="image_wallet"
                          src="/assets/images/walletImages/TWT 1.png"
                          alt="metamask"
                          width={100}
                          height={50}
                        />
                        <button className="wallet_btn">
                          Trust wallet
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
                </div>
              </>:""
                }  
            </div>
    )
}
export default Navbar