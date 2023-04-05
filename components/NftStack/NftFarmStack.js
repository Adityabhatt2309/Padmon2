import React, { useState } from "react";
import hero from "/public/assets/images/hero.png";
import search from "/public/assets/images/search.png";
import big from "/public/assets/images/big.png";
import play from "/public/assets/images/play.png";
import NFT_STAKE_ABI from "/utils/Config/NFT_STAKE_ABI.json";
import TOKEN_ABI from "/utils/Config/TOKEN_ABI.json";
import Config, { NFT, NFT_STAKE } from "/utils/Config";
import Web3 from "web3";
import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import add from "/public/assets/images/add.gif";
import StakeCard from "./StakeCard";
import WIZARD from "/public/assets/images/add.gif";
import ORDINARY from "/public/assets/images/Ordinary.gif";
import EPIC from "/public/assets/images/Epic.gif";
import RARE from "/public/assets/images/Rare.gif";
// import { func } from "prop-types";
import AUTOSHARK from "/public/assets/images/AUTOSHARK.gif";
import DMTNT from "/public/assets/images/DMTNT.gif";
import BabyNFT from "/public/assets/images/BabyNFT.gif";
import NFB from "/public/assets/images/BananaWIZARDs.gif";
import MCS from "/public/assets/images/MoonCafeSloth.gif";

import ROUTER_ABI from "/utils/Config/ROUTER_ABI.json";
import NFWolfPup from "/public/assets/images/NFWolfPup.gif";
import BK from "/public/assets/images/BananaKing.gif";
import WolfdenGolden from "/public/assets/images/WolfdenGolden.png";

import BBQG from "/public/assets/images/BarbecueNFT.gif";
import SQ from "/public/assets/images/SquirrelNFT.gif";
import OWL from "/public/assets/images/OwlNFTFARM.gif";
import SING from "/public/assets/images/SingularfarmNFT.gif";
import MDF from "/public/assets/images/MDFNFT.gif";
import CL from "/public/assets/images/Lovesswap.gif";
import GT from "/public/assets/images/GT.gif";
import PEAR from "/public/assets/images/PEAR.gif";
import MPS from "/public/assets/images/MPS.gif";
import BTCG from "/public/assets/images/BTCG.gif";
import PMDB from "/public/assets/images/PMDB.gif";
import DSG from "/public/assets/images/DSG.gif";
import CDP from "/public/assets/images/CDP.gif";
import TRIBOT from "/public/assets/images/TRIBOT.gif";
import SPARTAN from "/public/assets/images/SPARTAN.gif";
import JOKEZOO from "/public/assets/images/JOKEZOO.jpg";
import SPARTANV2 from "/public/assets/images/SPARTANV2.gif";

import WizardBattlePass from "/public/assets/images/Wizard Battle Pass.gif";
import NFP from "/public/assets/images/NFP.jpg";
import NFWfarm from "/public/assets/images/NFWfarm.jpg";
import Berserker_Viking_NFT from "/public/assets/images/Berserker_Viking_NFT.gif";
import Lunapup from "/public/assets/images/Lunapup.jpg";
import Lunapup2 from "/public/assets/images/Lunapup2.png";
import Replay_Pacakge from "/public/assets/images/Replay_Pacakge.png";
import BronzeGuard from "/public/assets/images/BronzeGuard.gif";
import { useAccount } from "wagmi";
import NftFarmStackCard from "./NftFarmStackCard";
// import styles from './Style.module.css';


const STAKE_CONTRACT = [
	{
	  address: "0x55D7F73086C6FE0D1DFe13B907Ee752628C3BA40",
	  nft: "0x3DE6E1e9a74944a8A1c2F7712411e038E6EE6dDC",
      token: "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47",
	  image: BronzeGuard,
	  status: 1,
	  fee: 1,
	  feedecimal: 100,
	  ape: 2,
	  lp: 0,
	  pair: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
	},
  ];

const NftFarmStack = () => {

    const [active, setActive] = useState(false);
	const [show, setShow] = useState(0)
	const [details, showDetails] = useState(false);

	const showFilterData = (index) => {
		if (index === show) {
			setShow(-1);
		} else {
			setShow(index);
		}
	}

	let web3Provider;
	if (typeof window !== "undefined") {
	  web3Provider = window.ethereum;
	}
	const [tvl, setTVL] = useState(0);
  

    console.log("active", active);


  return (
    <div>
        <div>
			<div className="nft-section-2">
				<div className="nft-section-2">
					<div className="container">
						<div className="inner-nft-section-2">
							<h2 className="gradient-border"><span>Padmonkeys</span> <span>NFT FARM</span></h2>
							<p className="heading_text">Stake for Your PadMonkey Tiered NFT</p>
						</div>
					</div>
				</div>


				<div className="nft-section-3 pb-5">
					<div className="container">
						<div className="inner-nft-section-3 pb-5">
							<div className="active-section">
								<ul>
									<li className={`${active == false ? "nft-li-1" : ""}`}><a href="#" onClick={() => setActive(false)}>Active</a></li>
									<li className={`${active == true ? "nft-li-1" : ""}`}><a href="#" onClick={() => setActive(true)}>inactive</a></li>
								</ul>
							</div>
							{
								// DataNftFarm.map((value, index) => {
								// 	return (
								// 		<>
								// 			<div className="active-section-1" onClick={() => {
								// 				showFilterData(index);
								// 			}}>
								// 				<div className="inner-active-section-1">
								// 					<div className="inner-active-section-1-image">
								// 						<img src="/assets/image-1.jpg" />
								// 					</div>
								// 					<div className="inner-active-section-1-content">
								// 						<h3><span>{value.nftName}</span></h3>
								// 						<h4><span>BG NFT</span></h4>
								// 					</div>
								// 					<div className="clear"></div>
								// 				</div>


								// 				<div className="inner-active-section-2">
								// 					<div className="inner-active-section-2-image">
								// 						<img src="/assets/icon-10.png" />
								// 					</div>
								// 					<div className="inner-active-section-2-content">
								// 						<h3><span>{value.padmonValue} </span> <span>$PDAO</span></h3>
								// 					</div>
								// 					<div className="clear"></div>
								// 				</div>


								// 				<div className="inner-active-section-3">
								// 					<div className="inner-active-section-3-content">
								// 						<h3><span>{value.access} </span></h3>
								// 					</div>
								// 				</div>


								// 				<div className="inner-active-section-4">
								// 					<div className="inner-active-section-4-content">
								// 						<h3><span>NA</span></h3>
								// 					</div>
								// 				</div>


								// 				<div className="inner-active-section-5">
								// 					<div className="inner-active-section-5-image">
								// 						<img src="/assets/connect-wallet-btn.png" />
								// 					</div>
								// 				</div>
								// 			</div>

								// 			<div className={`${show === index ? "active" : "hidden"}`}>
								// 				<div className="active-section-2">
								// 					<div className="inner-active-section-2-1">
								// 						<div className="ias2-1-content">
								// 							<p className="enndd">End</p>
								// 							<p className="naaa">{value.availability}</p>
								// 							<div className="clear"></div>
								// 						</div>

								// 						<div className="ias2-1-content">
								// 							<p className="enndd">Total $PDAO Staked</p>
								// 							<p className="naaa">{value.TotalStaked}</p>
								// 							<div className="clear"></div>
								// 						</div>

								// 						<div className="ias2-1-content">
								// 							<p className="enndd">Stake Free</p>
								// 							<p className="naaa">{value.StakedFee}</p>
								// 							<div className="clear"></div>
								// 						</div>

								// 					</div>

								// 					<div className="inner-active-section-2-2">
								// 						<div className="ias2-1-content">
								// 							<p className="enndd">Stake</p>
								// 							<p className="naaa">{value.Stake}</p>
								// 							<div className="clear"></div>
								// 						</div>

								// 						<div className="ias2-1-content">
								// 							<p className="enndd">Your Staked Value</p>
								// 							<p className="naaa">{value.StakedValue}</p>
								// 							<div className="clear"></div>
								// 						</div>

								// 						<div className="ias2-1-content">
								// 							<p className="enndd">Total Locked Value</p>
								// 							<p className="naaa">{value.LockedValue}</p>
								// 							<div className="clear"></div>
								// 						</div>
								// 					</div>

								// 					<div className="inner-active-section-2-3">
								// 						<h3 className="you-stackk"><span className="yo-st-1">Your Staked</span> <span className="yo-st-2">{value.YourStaked}</span></h3>

								// 						<div className="inner-active-section-2-btn">
								// 							<img src="/assets/scan-btn-1.png" />
								// 							<img src="/assets/scan-btn-2.png" />
								// 							<div className="clear"></div>
								// 						</div>
								// 					</div>
								// 				</div>
								// 			</div>

								// 		</>
								// 	)
								// })

								
							}
							{
								active?<div className={`${setActive?"inactive":"active"} tab-panel`} id="inactive">
                                {STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
                                        if(value.status == 0){
                                        return   <NftFarmStackCard index={index} />
                                    }

                                    })
                                    }
                    </div>
								
							: 	<div className={`${setActive?"active":"inactive"} tab-panel`} id="active">
							{STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
								  if(value.status == 1){
								  return   <NftFarmStackCard index={index} />
							  }
							  })
							  }
			  		</div>
							}

				
                   
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default NftFarmStack
