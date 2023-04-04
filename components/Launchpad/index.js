import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import Upcoming from './Upcoming';
import Link from 'next/link';

const Launchpad = () => {

    const [show, setShow] = useState(0);
    const [tab,setTab] = useState(0);
  return (
    <div>
         <div className="main-body">
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

    <div className="nft-section-1">
	<div className="container">
		<div className="inner-nft-section-1">
			<div className="nft-nd-s-1 nft-nd-s-1-2">
				<ul>
					<li className={`${tab == 0 ?"nft-li-1":""}`} ><Link href="" onClick={()=>{setTab(0)}}>Upcoming</Link></li>
					<li className={`${tab == 1 ?"nft-li-1":""}`}><Link href="" onClick={()=>{setTab(1)}}>Live</Link></li>
					<li className={`${tab == 2 ?"nft-li-1":""}`}><Link href="" onClick={()=>{setTab(2)}}>Success</Link></li>
                    <li className={`${tab == 3 ?"nft-li-1":""}`}><Link href="" onClick={()=>{setTab(3)}}>Cancelled</Link></li>
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
