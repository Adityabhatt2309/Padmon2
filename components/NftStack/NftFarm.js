import { useState } from "react";
import React from 'react'


const DataNftFarm=[
	{
		id:0,
		nftImage:"/assets/image-1.jpg",
		nftName:28,
		padmonValue:10.000,
		access:"Redeemable",
		availability:"NA",
		TotalStaked:7200000.01,
		StakedFee:20,
		Stake:"$PDAO",
		StakedValue:"$0",
		LockedValue:"$32456.00",
		YourStaked:28,
	},
	{
		id:1,
		nftImage:"/assets/image-1.jpg",
		nftName:28,
		padmonValue:10.000,
		access:"Redeemable",
		availability:"NA",
		TotalStaked:7200000.01,
		StakedFee:20,
		Stake:"$PDAO",
		StakedValue:"$0",
		LockedValue:"$32456.00",
		YourStaked:28,
	},
	{
		id:2,
		nftImage:"/assets/image-1.jpg",
		nftName:28,
		padmonValue:10.000,
		access:"Redeemable",
		availability:"NA",
		TotalStaked:7200000.01,
		StakedFee:20,
		Stake:"$PDAO",
		StakedValue:"$0",
		LockedValue:"$32456.00",
		YourStaked:28,
	},
	{
		id:3,
		nftImage:"/assets/image-1.jpg",
		nftName:28,
		padmonValue:10.000,
		access:"Redeemable",
		availability:"NA",
		TotalStaked:7200000.01,
		StakedFee:20,
		Stake:"$PDAO",
		StakedValue:"$0",
		LockedValue:"$32456.00",
		YourStaked:28,
	},
]

const NftFarm = () => {
    const [active,setActive] = useState(false);
	const [show, setShow] = useState(0)
	const [details,showDetails] = useState(false);

	const showFilterData=(index)=>{
		if(index === show){
			setShow(-1);
		}else{
			setShow(index);
		}
	}

  return (
    <div>
        <div class="nft-section-2">
<div class="nft-section-2">
	<div class="container">
		<div class="inner-nft-section-2">
			<h2 className="gradient-border"><span>Padmonkeys</span> <span>NFT FARM</span></h2>
			<p>Stake for Your PadMonkey Tiered NFT</p>
		</div>
	</div>
</div>	
	
	
<div class="nft-section-3">
	<div class="container">
		<div class="inner-nft-section-3">
			<div class="active-section">
				<ul>
                <li className={`${active == false ?"nft-li-1":""}`}><a href="#" onClick={()=>setActive(false)}>Active</a></li>
					<li className={`${active == true ?"nft-li-1":""}`}><a href="#" onClick={()=>setActive(true)}>inactive</a></li>
				</ul>
			</div>
			
			{
				DataNftFarm.map((value,index)=>{
					return(
						<>
							<div class="active-section-1" onClick={()=>{
					showFilterData(index);
				}}>
				<div class="inner-active-section-1">
					<div class="inner-active-section-1-image">
						<img src="/assets/image-1.jpg" />
					</div>
					<div class="inner-active-section-1-content">	
						<h3><span>{value.nftName}</span></h3>
						<h4><span>BG NFT</span></h4>
					</div>
					<div class="clear"></div>
				</div>
				
				
				<div class="inner-active-section-2">
					<div class="inner-active-section-2-image">
						<img src="/assets/icon-10.png" />
					</div>
					<div class="inner-active-section-2-content">	
						<h3><span>{value.padmonValue} </span> <span>$PDAO</span></h3>
					</div>
					<div class="clear"></div>
				</div>


				<div class="inner-active-section-3">
					<div class="inner-active-section-3-content">	
						<h3><span>{value.access} </span></h3>
					</div>
				</div>


				<div class="inner-active-section-4">
					<div class="inner-active-section-4-content">	
						<h3><span>NA</span></h3>
					</div>
				</div>


				<div class="inner-active-section-5">
					<div class="inner-active-section-5-image">	
						<img src="/assets/connect-wallet-btn.png" />
					</div>
				</div>				
			</div>
			
			<div className={`${show === index?"active":"hidden"}`}>
			<div class="active-section-2">
				<div class="inner-active-section-2-1">
					<div class="ias2-1-content">
						<p class="enndd">End</p>
						<p class="naaa">{value.availability}</p>
						<div class="clear"></div>
					</div>
					
					<div class="ias2-1-content">
						<p class="enndd">Total $PDAO Staked</p>
						<p class="naaa">{value.TotalStaked}</p>
						<div class="clear"></div>
					</div>

					<div class="ias2-1-content">
						<p class="enndd">Stake Free</p>
						<p class="naaa">{value.StakedFee}</p>
						<div class="clear"></div>
					</div>					

				</div>
				
				<div class="inner-active-section-2-2">
					<div class="ias2-1-content">
						<p class="enndd">Stake</p>
						<p class="naaa">{value.Stake}</p>
						<div class="clear"></div>
					</div>
					
					<div class="ias2-1-content">
						<p class="enndd">Your Staked Value</p>
						<p class="naaa">{value.StakedValue}</p>
						<div class="clear"></div>
					</div>

					<div class="ias2-1-content">
						<p class="enndd">Total Locked Value</p>
						<p class="naaa">{value.LockedValue}</p>
						<div class="clear"></div>
					</div>
				</div>

				<div class="inner-active-section-2-3">
					<h3 class="you-stackk"><span class="yo-st-1">Your Stacked</span> <span class="yo-st-2">{value.YourStaked}</span></h3>
					
					<div class="inner-active-section-2-btn">
						<img src="/assets/scan-btn-1.png" />
						<img src="/assets/scan-btn-2.png" />
						<div class="clear"></div>
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

export default NftFarm
