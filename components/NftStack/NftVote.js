import Link from "next/link";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { NFT_VOTING } from "/utils/Config";
import ContractAbi from "/utils/Config/ContractAbi.json";
import StonePaper1 from "./StonePaper1";
import { useRouter } from 'next/router';

const NftVote = () => {

	const router = useRouter();
    const slug = router.query.slug;

	const [upcomingEventArray, setUpcomingEventArray] = useState([]);
    let provider;
    if (typeof window !== "undefined") {
        provider = window.ethereum;
     }
   
    const [votedescriptionArray, setVotedescriptionArray] = useState([]);
    const [eventBuleanVal,seteventBuleanVal]= useState([]);


    useEffect(() => {
        getTotalvotingEvent();
        geteventDetails();
    }, [])



    const getTotalvotingEvent = async () => {
        const web3 = new Web3(provider);
        const contractABi = new web3.eth.Contract(ContractAbi, NFT_VOTING);
        const votingevent = await contractABi.methods.totalvotingEvents().call()


        let _commingEvents = [];

        for (let i = 0; i < votingevent; i++) {

            _commingEvents.push({
                count: i
            });

            if (i == (votingevent - 1)) {

                setUpcomingEventArray(_commingEvents);

            }

        }

    }


    const geteventDetails = async () => {
        const web3 = new Web3(provider);
        const contractABi = new web3.eth.Contract(ContractAbi, NFT_VOTING);
        const eventDetails = await contractABi.methods.getEventDetails(1).call()
        console.log("eventDetails", eventDetails);
        setVotedescriptionArray(eventDetails[2]);
        seteventBuleanVal(eventDetails[4]);
    }

    // const eventItemhandle = (i) => {
    //     window.location.href = "/data?slug" + i;
    // }

  return (
    <div className='nft_vote_section'>
        {/* <div className="nft-section-1">
	<div className="container">
		<div className="inner-nft-section-1">
			<div className="nft-nd-s-1">
				<ul>
					<li><a href="nft-1.html">NFT POOL</a></li>
					<li><a href="nft.html">NFT FARM</a></li>
					<li className="nft-li-1"><a href="nft-2.html">NFT VOTE</a></li>
					<div className="clear"></div>
				</ul>
			</div>
		</div>
	</div>
</div> */}
	
<div className="nft-section-2">
	<div className="container">
		<div className="inner-nft-section-2">
			<h2><span>Stake Your NFT</span></h2>
			<p className='heading_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
		</div>
	</div>
</div>	


	
<div className="nft-vote-area">
	<div className="container">
		<div className="inner-nft-vote-area">
			<div className="inner-nft-vote-area-one">
				<h3>Caste your Vote now</h3>
			</div>
			<div className="wrap-4">
				
    <div className="container flex justify-center">

        {
             upcomingEventArray.length   > 0 ? <> {
                 upcomingEventArray.map((v, i) => {
                    return (
                        <div className="main-event-box text-center">
                            <Link href={{pathname:"votingdeatils",query: {slug:`${i+1}`} }}  className="event-box-wrp">
                                <div className="eventHover">
                                    <div className="event-box">
                                        {/* <h3 className="text-white font-bold">{votedescriptionArray[1]}</h3> */}
										<h3 className="text-white font-bold">Padmon Voting</h3>
                                        {/* <img src={votedescriptionArray[0]} /> */}
                                    </div>
                                </div>
                                <div class="middle">
                                    <button className="event-click-btn active-section2 text-white p-2 rounded-md"  >View Vote</button>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }</> : <p className="noeventsfound text-white">No Events Found</p>
        }

       

    </div>
	{/* <StonePaper1 index={slug}/> */}

</div>

			{/* <div className="inner-nft-vote-area-left" id="inval">
				<div className="inner-inval-1">
					<h4>Yes</h4>
				</div>
				<div className="inner-inval-2">
					<h4><span className="in-inval-1">450</span> <span className="in-inval-2">Votes</span></h4>
				</div>			

			</div>
			
			<div className="inner-nft-vote-area-left">
				<div className="inner-inval-1">
					<h4>No</h4>
				</div>
				<div className="inner-inval-2">
					<h4><span className="in-inval-1">450</span> <span className="in-inval-2">Votes</span></h4>
				</div>
			</div>

			<div className="inner-nft-vote-area-left">
				<div className="inner-inval-1">
					<h4>Maybe</h4>
				</div>
				<div className="inner-inval-2">
					<h4><span className="in-inval-1">450</span> <span className="in-inval-2">Votes</span></h4>
				</div>
			</div>			 */}
		</div>
	</div>
</div>
    </div>
  )
}

export default NftVote
