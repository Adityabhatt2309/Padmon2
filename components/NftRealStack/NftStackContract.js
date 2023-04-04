import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
// import NftFarm from './NftFarm';
// import NftPool from './NftPool';
// import NftVote from './NftVote';


const DataNftFarm = [
	{
		id: 0,
		nftImage: "/assets/image-1.jpg",
		nftName: 28,
		padmonValue: 10.000,
		access: "Redeemable",
		availability: "NA",
		TotalStaked: 7200000.01,
		StakedFee: 20,
		Stake: "$PDAO",
		StakedValue: "$0",
		LockedValue: "$32456.00",
		YourStaked: 28,
	},
	{
		id: 1,
		nftImage: "/assets/image-1.jpg",
		nftName: 28,
		padmonValue: 10.000,
		access: "Redeemable",
		availability: "NA",
		TotalStaked: 7200000.01,
		StakedFee: 20,
		Stake: "$PDAO",
		StakedValue: "$0",
		LockedValue: "$32456.00",
		YourStaked: 28,
	},
	{
		id: 2,
		nftImage: "/assets/image-1.jpg",
		nftName: 28,
		padmonValue: 10.000,
		access: "Redeemable",
		availability: "NA",
		TotalStaked: 7200000.01,
		StakedFee: 20,
		Stake: "$PDAO",
		StakedValue: "$0",
		LockedValue: "$32456.00",
		YourStaked: 28,
	},
	{
		id: 3,
		nftImage: "/assets/image-1.jpg",
		nftName: 28,
		padmonValue: 10.000,
		access: "Redeemable",
		availability: "NA",
		TotalStaked: 7200000.01,
		StakedFee: 20,
		Stake: "$PDAO",
		StakedValue: "$0",
		LockedValue: "$32456.00",
		YourStaked: 28,
	},
]

const NftStackContract = () => {

    const [active, setActive] = useState(false);
	// const [show, setShow] = useState(0)
	const [details, showDetails] = useState(false);

    const [show, setShow] = useState(0);
const [nftPool,setNftPool] = useState(0);

	const showFilterData = (index) => {
		if (index === show) {
			setShow(-1);
		} else {
			setShow(index);
		}
	}
  return (
    <div>
<div>
      <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <a href="#"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                            </div>
                            <div className="header-right">
                                <ul>
                                    <li><a href="/">NFT market</a></li>
                                    <li><a href="/nft">nft</a></li>
                                    <li><a href="/">projects</a></li>
                                    {/* <li><a href="https://padmondao.gitbook.io" target="_blank">whitepaper</a></li> */}
                                    {/* <div className="clear"></div>	 */}
								</ul>
                            </div>
                            {/* <div className="header-right-1">
                                <span><a href="#"><img src="/assets/group-1.png" /></a></span>
                            </div> */}
                        </div>
                    </div>
                    </div>
	
{/* 	
<!---------------------Mobile-Menu-------------------------------> */}


<div className="mobile-area">
                    <div className="container">
                        <div className="mobile-logo">
                            <a href="/"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                        </div>

                        <div className="mobile-menu">
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

{/* <!---------------------Mobile-Menu------------------------------->	 */}
	
	
	
	

</div>
      <div className="nft-section-2">
				<div className="nft-section-2">
					<div className="container">
						<div className="inner-nft-section-2">
							<h2 className="gradient-border"><span>Padmonkeys</span> <span>NFT FARM</span></h2>
							<p>Stake for Your PadMonkey Tiered NFT</p>
						</div>
					</div>
				</div>


				<div className="nft-section-3">
					<div className="container">
						<div className="inner-nft-section-3">
							<div className="active-section">
								<ul>
									<li className={`${active == false ? "nft-li-1" : ""}`}><a href="#" onClick={() => setActive(false)}>Active</a></li>
									<li className={`${active == true ? "nft-li-1" : ""}`}><a href="#" onClick={() => setActive(true)}>inactive</a></li>
								</ul>
							</div>

							{
								DataNftFarm.map((value, index) => {
									return (
										<>
											<div className="active-section-1" onClick={() => {
												showFilterData(index);
											}}>
												<div className="inner-active-section-1">
													<div className="inner-active-section-1-image">
														<img src="/assets/image-1.jpg" />
													</div>
													<div className="inner-active-section-1-content">
														<h3><span>{value.nftName}</span></h3>
														<h4><span>BG NFT</span></h4>
													</div>
													<div className="clear"></div>
												</div>


												<div className="inner-active-section-2">
													<div className="inner-active-section-2-image">
														<img src="/assets/icon-10.png" />
													</div>
													<div className="inner-active-section-2-content">
														<h3><span>{value.padmonValue} </span> <span>$PDAO</span></h3>
													</div>
													<div className="clear"></div>
												</div>


												<div className="inner-active-section-3">
													<div className="inner-active-section-3-content">
														<h3><span>{value.access} </span></h3>
													</div>
												</div>


												<div className="inner-active-section-4">
													<div className="inner-active-section-4-content">
														<h3><span>NA</span></h3>
													</div>
												</div>


												<div className="inner-active-section-5">
													<div className="inner-active-section-5-image">
														<img src="/assets/connect-wallet-btn.png" />
													</div>
												</div>
											</div>

											<div className={`${show === index ? "active" : "hidden"}`}>
												<div className="active-section-2">
													<div className="inner-active-section-2-1">
														<div className="ias2-1-content">
															<p className="enndd">End</p>
															<p className="naaa">{value.availability}</p>
															<div className="clear"></div>
														</div>

														<div className="ias2-1-content">
															<p className="enndd">Total $PDAO Staked</p>
															<p className="naaa">{value.TotalStaked}</p>
															<div className="clear"></div>
														</div>

														<div className="ias2-1-content">
															<p className="enndd">Stake Free</p>
															<p className="naaa">{value.StakedFee}</p>
															<div className="clear"></div>
														</div>

													</div>

													<div className="inner-active-section-2-2">
														<div className="ias2-1-content">
															<p className="enndd">Stake</p>
															<p className="naaa">{value.Stake}</p>
															<div className="clear"></div>
														</div>

														<div className="ias2-1-content">
															<p className="enndd">Your Staked Value</p>
															<p className="naaa">{value.StakedValue}</p>
															<div className="clear"></div>
														</div>

														<div className="ias2-1-content">
															<p className="enndd">Total Locked Value</p>
															<p className="naaa">{value.LockedValue}</p>
															<div className="clear"></div>
														</div>
													</div>

													<div className="inner-active-section-2-3">
														<h3 className="you-stackk"><span className="yo-st-1">Your Stacked</span> <span className="yo-st-2">{value.YourStaked}</span></h3>

														<div className="inner-active-section-2-btn">
															<img src="/assets/scan-btn-1.png" />
															<img src="/assets/scan-btn-2.png" />
															<div className="clear"></div>
														</div>
													</div>
												</div>
											</div>

										</>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
</div>
  )
}

export default NftStackContract
