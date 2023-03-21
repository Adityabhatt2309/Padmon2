import React, { useState } from 'react';
// import styles from '../styles/Nav.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import NftFarm from './NftFarm';
import NftPool from './NftPool';
import NftVote from './NftVote';




const NftStack = () => {

const [show, setShow] = useState(0);
const [nftPool,setNftPool] = useState(0);
// console.log(show)


  return (
    <>
      <div className={`${nftPool==0 ? 'main-body1':""} ${ nftPool==1 ? 'main-body1':""} ${nftPool==2 ? 'main-body2':""}`}>
      <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <a href="#"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                            </div>
                            <div className="header-right">
                                <ul>
                                    <li><a href="#">NFT market</a></li>
                                    <li><a href="#">nft</a></li>
                                    <li><a href="#">projects</a></li>
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


<div class="mobile-area">
                    <div class="container">
                        <div class="mobile-logo">
                            <a href="/"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                        </div>

                        <div class="mobile-menu">
                        {
                                show?<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px"}} onClick={()=>{setShow(!show)}}><AiOutlineClose className='hamburger'/></span>:<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px" }} onClick={()=>{setShow(!show)}}><AiOutlineMenu className='hamburger'/></span>
                            }

                            
                        </div>
                    </div>
                    {
                            
                            show?<div id="myNav" class="overlay">
                            <div class="overlay-content">
                                <a href="#">Game</a>
                                <a href="#">NFTs</a>
                                <a href="https://padmondao.gitbook.io" target="_blank">whitepaper</a>
                                <a href="#">Unlock wallet</a>
                                
                                
                                
                            
                            </div>
                        </div>	:""
                            }
                   
                </div>

{/* <!---------------------Mobile-Menu------------------------------->	 */}
	
	
	
	
<div class="nft-section-1">
	<div class="container">
		<div class="inner-nft-section-1">
			<div class="nft-nd-s-1">
				<ul>
					<li className={`${nftPool == 0 ?"nft-li-1":""}`} ><a href="#" onClick={()=>{setNftPool(0)}}>NFT POOL</a></li>
					<li className={`${nftPool == 1 ?"nft-li-1":""}`}><a href="#" onClick={()=>{setNftPool(1)}}>NFT FARM</a></li>
					<li className={`${nftPool == 2 ?"nft-li-1":""}`}><a href="#" onClick={()=>{setNftPool(2)}}>NFT VOTE</a></li>
					<div class="clear"></div>
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
