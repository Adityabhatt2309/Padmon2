import React from 'react'
import Navbar from '../Navbar'
import { BsTwitter } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';
import Testimonial from '../Testimonial/Testimonial';

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
				<p> We bring forth a new generation of launchpad. PadmonDAO is more than just a place for presales. 

Our community gets to use their voice via governance voting to be a part of the process. Together, we bring in projects our community WANTS to invest in. 

We provide educational content, live research sessions; create an atmosphere of informed, passionate investors. 

Projects then gain many more early stage investors that want to truly see them thrive.</p>
			</div>
			
			<div class="inner-sec-3-heading">
				<h3>We Learn Together. We Grow Together. We Invest Together.</h3>
			</div>
			
			
			
			
			{/* <div class="inner-sec-3" >
				<ul class="icon-listing">
					<li><a href="https://twitter.com/PadmonDAO"><BsTwitter/></a></li>
					<li><a href="https://t.me/PadmonDAO"><BsTelegram/></a></li>
					<li><a href="https://discord.gg/m7rStPVyGG "><BsDiscord/></a></li>
					<li><a href="https://medium.com/padmondao "><AiOutlineMedium/></a></li>
					<li><a href="https://t.me/PadmonDAOannouncements"><BsTelegram/></a></li>
					<div class="clear"></div>
				</ul>
			</div> */}
			
			
			
			
			{/* <div class="inner-sec-4">
				<div class="inner-sec-4-1" id="is4">
					<a href="#"><img src="/assets/group-10.png" class="btn-image-1" /></a>
				</div>
				
				<div class="inner-sec-4-1">
					<a href="#"><img src="/assets/group-11.png" class="btn-image-2" /></a>
				</div>
				
				<div class="clear"></div>
			</div> */}
			
			<div class="inner-sec-5">
				<h3><span>Collect Our Exclusive NFT's and Have the Power to Change</span> </h3>
				<h3><p>Come for the Art, Stay for the Power!</p> </h3>
				<div class="sec-7">
		<div class="inner-sec-7">
			
		<div class="inner-sec-7-1">
				<img  src="/assets/videos/Tier1Animvideo.gif" />
			</div>	
			<div class="inner-sec-7-1">
				<img  src="/assets/videos/Tier2Animvideo.gif" />
			</div>	

			<div class="inner-sec-7-1">
				<img  src="/assets/videos/Tier3Animvideo.gif" />
			</div>			
	</div>
				</div> 
				<Testimonial/>
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