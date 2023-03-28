import React,{useEffect, useState} from 'react'


const DataCard=[
	{
		id:0,
		nftImage:"/assets/image-1.jpg",
		nftName:"$PDAO Pool",
		nftPercentage:12000,
		nftPrice:100.0000,
		stakeFees:7200000.01,
		endTime:20,
	},
	{
		id:1,
		nftImage:"/assets/image-1.jpg",
		nftName:"$GUARD Pool",
		nftPercentage:12000,
		nftPrice:100.0000,
		stakeFees:7200000.01,
		endTime:20,
	},
	{
		id:2,
		nftImage:"/assets/image-1.jpg",
		nftName:"$KNIGHT Pool",
		nftPercentage:12000,
		nftPrice:100.0000,
		stakeFees:7200000.01,
		endTime:20,
	},
	{
		id:3,
		nftImage:"/assets/image-1.jpg",
		nftName:"TBD",
		nftPercentage:12000,
		nftPrice:100.0000,
		stakeFees:7200000.01,
		endTime:20,
	},

]

const NftPool = () => {
    const [active,setActive] = useState(false);
	const [details,showDetails] = useState(false);
	// const [selectedData,showSelectedData] = useState(DataCard);

	const [show, setShow] = useState(0)

	// const filterData=(id)=>{
	// 	// console.log(id,"id......")
	//   const filteredvalue=[...details].filter((todo,index)=>index === id)
	//   showDetails(filteredvalue)
	//   // console.log(filteredvalue,"filtered value...........")
	  
	//   }

	// const showFilterData=(index)=>{
	// 	const filteredvalue=[...selectedData].filter((todo,id)=>id === index)
	// 	showSelectedData(filteredvalue);
	// 	showDetails(!details);
	//   console.log(filteredvalue,"filtered value...........")
	// }
	const showFilterData=(index)=>{
		if(index === show){
			setShow(-1);
		}else{
			setShow(index);
		}
		// setShow(index) 
	}
  return ( 
    <div >
        <div className="nft-section-2">
	<div className="container">
		<div className="inner-nft-section-2">
			<h2><span>NFT Staking POOL</span></h2>
			<p className='heading_text'>Stake NFTs to Earn Tokens</p>
		</div>
	</div>
</div>	
	
	
<div className="nft-section-3">
	<div className="container">
		<div className="inner-nft-section-3">
			<div className="active-section">
				<ul>
					<li className={`${active == false ?"nft-li-1":""}`}><a href="#" onClick={()=>setActive(false)}>Active</a></li>
					<li className={`${active == true ?"nft-li-1":""}`}><a href="#" onClick={()=>setActive(true)}>inactive</a></li>
				</ul>
			</div>
			
			{
				DataCard.map((value,index)=>{
					return(
						<>
			<div className="active-section-1" onClick={()=>{
					// showDetails(!details);
					showFilterData(index);
				}}>
				<div className="inner-active-section-1" id="ias-1">
					<div className="inner-active-section-1-image">
						<img src={value.nftImage} />
					</div>
					<div className="inner-active-section-1-content" id="iasc-1">	
						<h3><span>{value.nftName}</span></h3>
					</div>
					
				</div>
					


				<div className="inner-active-section-3" id="ias-3">
					<div className="inner-active-section-3-content">	
						<h3><span>{value.nftPercentage}% </span></h3>
					</div>
				</div>


				<div className="inner-active-section-4" id="ias-4">
					<div className="inner-active-section-4-content">	
						<h3><span>{value.nftPrice}</span></h3>
					</div>
				</div>	

				<div className="inner-active-section-5" id="ias-5">
					<div className="inner-active-section-5-image">	
						<img src="/assets/connect-wallet-btn.png" className='connect_wallet_btn'/>
					</div>
				</div>				
			</div>		
			<div className={`${show === index?"active":"hidden"}`}>
			<div className="active-section-2" >
					<div className="inner-active-section-2-1" id="iias21">
					<div className="ias2-1-content">
						<p className="enndd">End</p>
						<p className="naaa">NA</p>
						<div className="clear"></div>
					</div>
					

					<div className="ias2-1-content">
						<p className="enndd">Stake Free</p>
						<p className="naaa">{value.stakeFees}</p>
						<div className="clear"></div>					</div>					

				</div>
				
				<div className="inner-active-section-2-2" id="iias22">
					<div className="ias2-1-content">
						<p className="enndd">End Time</p>
						<p className="naaa">{value.endTime}%</p>
						<div className="clear"></div></div>

				</div>

				<div className="inner-active-section-2-3">
					<div className="inner-active-section-2-btn">
						<img src="/assets/scan-btn-1.png" className='btn_scan' />
						<img src="/assets/scan-btn-2.png"  className='btn_buy'/>
						<div className="clear"></div></div>
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
  )
}

export default NftPool
