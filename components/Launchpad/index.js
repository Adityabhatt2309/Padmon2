import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import Upcoming from './Upcoming';

const Launchpad = () => {

    const [show, setShow] = useState(0);
const [tab,setTab] = useState(0);
  return (
    <div>
         <div className={`${tab==0 ? 'main-body-launchpad':""} ${ tab==1 ? 'main-body-launchpad':""} ${tab==2 ? 'main-body-launchpad':""} ${tab==3 ? 'main-body-launchpad':""} `}>
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

    


    <div class="nft-section-1">
	<div class="container">
		<div class="inner-nft-section-1">
			<div class="nft-nd-s-1 nft-nd-s-1-2">
				<ul>
					<li className={`${tab == 0 ?"nft-li-1":""}`} ><a href="#" onClick={()=>{setTab(0)}}>Upcoming</a></li>
					<li className={`${tab == 1 ?"nft-li-1":""}`}><a href="#" onClick={()=>{setTab(1)}}>Live</a></li>
					<li className={`${tab == 2 ?"nft-li-1":""}`}><a href="#" onClick={()=>{setTab(2)}}>Success</a></li>
                    <li className={`${tab == 3 ?"nft-li-1":""}`}><a href="#" onClick={()=>{setTab(3)}}>Cancelled</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>	
        {
            tab == 0?<Upcoming/>:""
        }
        {
            tab ==1?<Upcoming/>:""
        }
        {
            tab == 2?<Upcoming/>:""
        
        }
        {
            tab == 3?<Upcoming/>:""
        
        }

</div>
    </div>
  )
}

export default Launchpad
