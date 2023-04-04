import React, { useState } from 'react';
// import styles from '../styles/Nav.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import NftFarm from './NftFarm';
import NftPool from './NftPool';
import NftVote from './NftVote';
import Link from 'next/link';




const NftStack = () => {
const [show, setShow] = useState(0);
const [nftPool,setNftPool] = useState(0);
// console.log(show)


  return (
    <>
      <div className={`${nftPool==0 ? 'main-body':""} ${ nftPool==1 ? 'main-body':""} ${nftPool==2 ? 'main-body':""}`}>
      <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <Link href="/"><img src="/assets/padmondaoblueoutline-1.png" /></Link>
                            </div>
                            <div className="header-right">
                                <ul>
                                    <li><Link href="/">NFT market</Link></li>
                                    <li><Link href="/nft">nft</Link></li>
                                    <li><Link href="/">projects</Link></li>
                                    {/* <li><Link href="https://padmondao.gitbook.io" target="_blank">whitepaper</Link></li> */}
                                    {/* <div className="clear"></div>	 */}
								</ul>
                            </div>
                            {/* <div className="header-right-1">
                                <span><Link href="#"><img src="/assets/group-1.png" /></Link></span>
                            </div> */}
                        </div>
                    </div>
                    </div>
	
{/* 	
<!---------------------Mobile-Menu-------------------------------> */}


<div className="mobile-area">
                    <div className="container">
                        <div className="mobile-logo">
                            <Link href="/"><img src="/assets/padmondaoblueoutline-1.png" /></Link>
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
                                <Link href="/">Game</Link>
                                <Link href="/nft">NFTs</Link>
                                <Link href="https://padmondao.gitbook.io" target="_blank">whitepaper</Link>
                                <Link href="/">Unlock wallet</Link>
                                
                                
                                
                            
                            </div>
                        </div>	:""
                            }
                   
</div>

{/* <!---------------------Mobile-Menu------------------------------->	 */}
	
	
<div className="nft-section-1">
	<div className="container">
		<div className="inner-nft-section-1">
			<div className="nft-nd-s-1">
				<ul>
					<li className={`${nftPool == 0 ?"nft-li-1":""}`} ><Link href="" onClick={()=>{setNftPool(0)}}>NFT POOL</Link></li>
					<li className={`${nftPool == 1 ?"nft-li-1":""}`}><Link href="" onClick={()=>{setNftPool(1)}}>NFT FARM</Link></li>
					<li className={`${nftPool == 2 ?"nft-li-1":""}`}><Link href="" onClick={()=>{setNftPool(2)}}>NFT VOTE</Link></li>
					<div className="clear"></div>
				</ul>
			</div>
		</div>
	</div>
</div>	
{
	nftPool == 0?<NftPool/>:""
}
{
	nftPool ==1?<NftFarm/>:""
}
{
	nftPool == 2?<NftVote/>:""
}
</div>
</>
    
  )
}

export default NftStack
