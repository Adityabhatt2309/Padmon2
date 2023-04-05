import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
// import { Params, useParams } from 'react-router-dom';
// import { Row, Col, Container, Button, ModalHeader, ModalFooter, Modal, ModalBody } from "reactstrap";
import Web3 from "web3";
// import useWallet from '@binance-chain/bsc-use-wallet'
// import Img3 from "/public/assets/Images/stonepaper/img3.png";
// import Img4 from "/public/assets/Images/stonepaper/img4.png";
// import Img5 from "/public/assets/Images/stonepaper/img5.png";
// import Icon1 from "/public/assets/Images/stonepaper/icon1.png";
// import Icon2 from "/public/assets/Images/stonepaper/icon2.png";
// import Icon3 from "/public/assets/Images/stonepaper/icon3.png";
import ContractAbi from "/utils/Config/ContractAbi.json";
import nftAbi from "/utils/Config/NFT_ABI.json";
import { NFT_VOTING } from "/utils/Config";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Link from "next/link";
// import styles from './Style.module.css';





const StonePaper1 = (props) => {
    const [show, setShow] = useState(0);
    

  let provider;
  if (typeof window !== "undefined") {
    provider = window.ethereum;
 }

  const wallet = useAccount();


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [completeTransactionModal, setCompleteTransactionModal] = useState(false);
  const completeTransactiontogglemodal = () => setCompleteTransactionModal(!completeTransactionModal);

  const [failTransactionModal, setFailTransactionModal] = useState(false);
  const failTransactiontogglemodal = () => setFailTransactionModal(!failTransactionModal);

  const [nobalnceModal, setNobalnceModal] = useState(false);
  const nobalncetoggleModal = () => setNobalnceModal(!nobalnceModal);

  const [votestringArray, setVotestringArray] = useState([]);
  const [voteunitArray, setVoteunitArray] = useState([]);
  const [votedescriptionArray, setVotedescriptionArray] = useState([]);
  const [nftAddress, setNftAddress] = useState("");
  const [blance, setBlance] = useState("");
  const [tokenid, setTokenid] = useState("");


  let  index  = props.index;
    
  

  useEffect(() => {
    geteventDetails();
  }, [nftAddress, wallet.address]);




  const geteventDetails = async () => {

    const web3 = new Web3(provider);
    
    console.log("voting addres", NFT_VOTING, index);

    const contractABi = new web3.eth.Contract(ContractAbi, NFT_VOTING);
    const eventDetails = await contractABi.methods.getEventDetails(index).call()
    console.log("eventDetails", eventDetails);
    setNftAddress(eventDetails[0]);
    setVotestringArray(eventDetails[1]);
    setVoteunitArray(eventDetails[3]);
    console.log(eventDetails[2]);
    setVotedescriptionArray(eventDetails[2]);
    if(wallet.address){
      getBlanceDetails(eventDetails[0]);

    }
    // getBlanceDetails function call




  }


  const getBlanceDetails = async (_nftAddress) => {
    const web3 = new Web3(provider);
    const Nftcontract = new web3.eth.Contract(nftAbi, _nftAddress);
    const BlanceDetails = await Nftcontract.methods.balanceOf(wallet.address).call();
 

    setBlance(BlanceDetails)

   
    if (BlanceDetails > 0) {

      const tokenId = await Nftcontract.methods.tokenOfOwnerByIndex(wallet.address,0).call();
      // alert(tokenId);
      setTokenid(tokenId);
    }
  }



  const castVotes = async (i) => {
    const option = i;

    const web3 = new Web3(provider);
    const contractABi = new web3.eth.Contract(ContractAbi, NFT_VOTING);
    console.log(index, tokenid, option);
    // alert(blance)
      if (blance > 0) {
      setModal(!modal);
       contractABi.methods.castVote(index, tokenid, option).send({
        from: wallet.address
      }).on('receipt', function (receipt) {

        completeTransactiontogglemodal();
        geteventDetails()
      }).on('error', function (receipt) {
        failTransactiontogglemodal();

      })
    }
    else {
      nobalncetoggleModal();
    }


  }
  return (
    <div  className="main-body">
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
				
    {/* <div className="container flex justify-center">

        {
             upcomingEventArray.length   > 0 ? <> {
                 upcomingEventArray.map((v, i) => {
                    return (
                        <div className="main-event-box text-center">
                            <Link href={{pathname:"votingdeatils",query: {slug:`${i+1}`} }}  className="event-box-wrp">
                                <div className="eventHover">
                                    <div className="event-box">
                                        <h3 className="text-white font-bold">{votedescriptionArray[1]}</h3>
                                        <img src={votedescriptionArray[0]} />
                                    </div>
                                </div>
                                <div class="middle">
                                    <button className="event-click-btn bg-white p-2 rounded-md"  >View</button>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }</> : <p className="noeventsfound">No Events Found</p>
        }

       

    </div> */}
	{/* <StonePaper1 index={slug}/> */}

    <div className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="bag-8">
                {
                  votedescriptionArray[0] &&
                  <img src={votedescriptionArray[0]} alt="" className="bag-5" />
                }
                {/* <img src={Img5} alt="" className="bag-7" />
                <img src={Img4} alt="" className="bag-6" /> */}
                {/* <button>
                  NFT's <br /> Availbale 5
                </button> */}
              </div>
            </div>
            <div className="col-md-7">
              <div className="bag-9">
                {/* <h2 >{votedescriptionArray[1]}</h2> */}
                {/* <p>
                  {votedescriptionArray[2]}
                </p> */}
              </div>
              <div className="bag-10">
                <div className="row flex justify-between w-full">

                  {
                    votestringArray.length > 0 && votestringArray.map((val, i) => {
                        console.log(i,val,"arrayData Voted");
                      return (
                        <div className="col-md-4 ">
                          <div className="bag-11 ">
                            <div className="bag-12" onClick={() => castVotes(i)}>
                              {/* <h3>Vote</h3> */}
                            </div>
                            {/* <p onClick={() => castVotes(i)}>{val}</p> */}

                            <div className="inner-nft-vote-area-left" id="inval" onClick={() => castVotes(i)}>
                              <div className="inner-inval-1">
                                <h4>Yes</h4>
                              </div>
                              <div className="inner-inval-2">
                                <h4 className=" flex flex-row pl-4"><span className="in-inval-1">450</span> <span className="in-inval-2">Votes</span></h4>
                              </div>			
                            </div>
                            {/* <button onClick={() => castVotes(i)}>{voteunitArray[i]}</button> */}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

{
    modal?
    <div className="flex justify-center absolute items-center top-52 inset-0 z-10">
        <div isOpen={modal} toggle={toggle} centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">


<main>
  <div className="modaltext text-center mt-4" >Transaction is Processing...</div>

</main>
<button className="depositButton" onClick={toggle}>Close</button>

</div>
    </div>:""
}
      


{
    completeTransactionModal?<div className="flex justify-center absolute items-center top-52 inset-0 z-10">
      <div isOpen={completeTransactionModal} toggle={completeTransactiontogglemodal} centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">


<main>
  <div className="modaltext text-center mt-4" >Transaction Completed</div>

</main>
<button className="depositButton" onClick={completeTransactiontogglemodal}>Close</button>

</div>  
    </div>:""
}
      

{
    failTransactionModal?<div className="flex justify-center absolute items-center top-52 inset-0 z-10">
        <div isOpen={failTransactionModal} toggle={failTransactiontogglemodal} centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">


<main>
  <div className="modaltext text-center mt-4" >Transaction Failed</div>

</main>
<button className="depositButton" onClick={failTransactiontogglemodal}>Close</button>

</div>
    </div>:""
}
      

{
    nobalnceModal?<div className="flex justify-center absolute items-center top-52 inset-0 z-10">
        <div isOpen={nobalnceModal} toggle={nobalncetoggleModal} centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">


<main>
  <div className="modaltext text-center mt-4" >No NFT balance in your wallet.</div>

</main>
<button className="depositButton bg-blue-500 rounded-xl p-2" onClick={nobalncetoggleModal}>Close</button>

</div>  
    </div>:""
}
      
    </div>
  )
}

export default StonePaper1;