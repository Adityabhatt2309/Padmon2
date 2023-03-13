import React from 'react'
import Navbar from '../Navbar'
import { BsTwitter } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='main-body'>
        <Navbar/>
        <div class="sec-1">
		<div class="container">
			<div class="inner-sec-1">
				<h2> <span> Let's invest in the future of blockchain. together </span></h2>
			</div>
			
			<div className="inner-sec-2">
				<p> We bring forth a new generation of launchpad. with padmonDAo, every project's details will be provided to our entire community, discuss and vited upon. 
				we're  more than just a launchapd, we give the people what they want, and give projects what they need.  the people use their voice via governance voting to bring in projects THEY want to invest in. Project gain early stage investors that want to INVEST in THEM </p>
			</div>
			
			<div class="inner-sec-3-heading">
				<h3>We Learn Together. We Grow Together. We Invest Together.</h3>
			</div>
			
			
			
			
			<div class="inner-sec-3" >
				<ul class="icon-listing">
					<li><a href="https://twitter.com/PadmonDAO"><BsTwitter/></a></li>
					<li><a href="https://t.me/PadmonDAO"><BsTelegram/></a></li>
					<li><a href="https://discord.gg/m7rStPVyGG "><BsDiscord/></a></li>
					<li><a href="https://medium.com/padmondao "><AiOutlineMedium/></a></li>
					<li><a href="https://t.me/PadmonDAOannouncements"><BsTelegram/></a></li>
					{/* <li><a href="#"><img src="/assets/icon-6.png" /></a></li> */}
					<div class="clear"></div>
				</ul>
			</div>
			
			
			
			
			<div class="inner-sec-4">
				<div class="inner-sec-4-1" id="is4">
					<a href="#"><img src="/assets/group-10.png" class="btn-image-1" /></a>
				</div>
				
				<div class="inner-sec-4-1">
					<a href="#"><img src="/assets/group-11.png" class="btn-image-2" /></a>
				</div>
				
				<div class="clear"></div>
			</div>
			
			
			<div class="inner-sec-5">
				<h3><span>Collect exclusive set of NFTS and have</span> <span>the power to CHANGE</span> </h3>
				<h3><p>Come for the Art, Stay for the Power!</p> </h3>
				<p> <span> Depending on which level of PadMonkey NFT you stake for, you can have the opportunity to invest more and gain a greater position of voting 
				power in the community! We have Three tiered NFT levels. All of which gain access to our community resources, as well as: </span></p>
			</div>
			
			<div class="inner-sec6-1">
				
					<p>The power to participate in all upcoming presales</p>
					<p>The power to vote</p>
					<p>The power to create community proposals</p>
					<p>The power to stake for rewards</p>
					<p>Additional Utilities to Come</p>
				<div class="clear"></div>
			</div>
			
			
			
			
			
		</div>
	</div>
    </div>
  )
}

export default Header