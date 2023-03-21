import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Details = () => {
    const [show, setShow] = useState(0);
  return (
    <div>
     <div className="main-body">
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

                <div class="pddao-area">
	<div class="details-area container">
		<div class="pddao-area-left">
			<div class="inner-pddao-area-left">
				<div class="inner-pddao-area-left-content">
					<h2><span>Lorem ipsum ( LOrem )</span></h2>
					<p>Presale Filled</p>	
				</div>
				
				<div class="inner-pddao-area-left-list">
					<div class="ipasll-area ipasll-area-1">
						<div class="ipasll-area-left">
							<p>Token Name</p>
						</div>
						<div class="ipasll-area-right">
							<p>Token Name</p>
						</div>
						<div class="clear"></div>
					</div>
					
					
					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Token Symbol</p>
						</div>
						<div class="ipasll-area-right">
							<p>Token Symbol</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Token Decimals</p>
						</div>
						<div class="ipasll-area-right">
							<p>Token Decimals</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Total Supply</p>
						</div>
						<div class="ipasll-area-right">
							<p>Total Supply</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Tokens For Presale</p>
						</div>
						<div class="ipasll-area-right">
							<p>Tokens For Presale</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Presale Rate</p>
						</div>
						<div class="ipasll-area-right">
							<p>Presale Rate</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Soft Cap</p>
						</div>
						<div class="ipasll-area-right">
							<p>Soft Cap</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Hard Cap</p>
						</div>
						<div class="ipasll-area-right">
							<p>Hard Cap</p>
						</div>
						<div class="clear"></div>
					</div>

					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Sale Start Time</p>
						</div>
						<div class="ipasll-area-right">
							<p>Sale Start Time</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Sale End Time</p>
						</div>
						<div class="ipasll-area-right">
							<p>Sale End Time</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Sale Type</p>
						</div>
						<div class="ipasll-area-right">
							<p>Sale Type</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Token Requirement ?</p>
						</div>
						<div class="ipasll-area-right">
							<p>Token Requirement ?</p>
						</div>
						<div class="clear"></div>
					</div>


					<div class="ipasll-area">
						<div class="ipasll-area-left">
							<p>Unsold Tokens</p>
						</div>
						<div class="ipasll-area-right">
							<p>Unsold Tokens</p>
						</div>
						<div class="clear"></div>
					</div>
					
					
					
					
					
					
					
					
				</div>
				
				
				
			</div>
		</div>
		
		<div class="pddao-area-right">
			<div class="inner-pddao-area-right">
				<div class="ipar-heading">
					<h2>15005.5 / 9000</h2>
				</div>
				
				<div class="ipar-bar-image">
					<img src="assets/scroll-bar-image.png" />
					<h4>09/12/2023 - 10:30 PM</h4>
				</div>
				
				<div class="ipar-heading-1">
					<h3>Your Contribution: 0.00 BUSD</h3>
				</div>
				
				<div class="ipar-area">
					<div class="inner-ipar-area">
						<div class="inner-ipar-area-left">
							<p>Total Token Purchased</p>
						</div>
						<div class="inner-ipar-area-right">
							<p>0.00 LORE</p>
						</div>	
						<div class="clear"></div>
					</div>
					
					<div class="inner-ipar-area">
						<div class="inner-ipar-area-left">
							<p>Total Token Due</p>
						</div>
						<div class="inner-ipar-area-right">
							<p>0.00 LORE</p>
						</div>	
						<div class="clear"></div>
					</div>			


					<div class="inner-ipar-area">
						<div class="inner-ipar-area-left">
							<p>Total Token Due Now</p>
						</div>
						<div class="inner-ipar-area-right">
							<p>0.00 LORE</p>
						</div>	
						<div class="clear"></div>
					</div>							
					
					
					
				</div>
				
				
			</div>
		</div>		
	</div>
</div>
    </div>
    </div>
  )
}

export default Details
