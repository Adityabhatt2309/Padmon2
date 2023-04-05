import React, { useState } from "react";

import NFT_STAKE_ABI from "/utils/Config/NFT_STAKE_LENDING.json";
import POOL_CONTRACT from "/utils/Config/POOL_CONTRACT.json";
import TOKEN_ABI from "/utils/Config/TOKEN_ABI.json";
import STAKENFT_ABI from "/utils/Config/STAKENFT_ABI.json";

import Config, { EX_LINK } from "/utils/Config";
import Web3 from "web3";
import { useEffect } from "react";
// import { func } from "prop-types";
import ROUTER_ABI from "/utils/Config/ROUTER_ABI.json";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NftFarmStack from "./NftFarmStack";
import BronzeGuard from "/public/assets/images/BronzeGuard.gif";



const STAKE_CONTRACT = [
	{
	  address: "0x55D7F73086C6FE0D1DFe13B907Ee752628C3BA40",
	  nft: "0x3DE6E1e9a74944a8A1c2F7712411e038E6EE6dDC",
      token: "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47",
	  image: "/assets/images/BronzeGuard.gif",
	  status: 1,
	  fee: 1,
	  feedecimal: 10000,
	  ape: 2,
	  lp: 0,
	  pair: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
	},
  ];


const NftFarmStackCard = (props) => {
  let web3Provider;

  if (typeof window !== "undefined") {
    web3Provider = window.ethereum;
  }

  const NFT = STAKE_CONTRACT[props.index].nft;
  const NFT_STAKE = STAKE_CONTRACT[props.index].address;
  const ERC_20 = STAKE_CONTRACT[props.index].token;
  const wallet = useAccount();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [stakedid,setStakedId] = useState(["1","2","3"]);

  const [damount, setdAmount] = useState(0);
  const [unstakeId, setunstakeId] = useState(null)

  const [symbol, setSymbol] = useState("");
  const [sTokenPrice, setsTokenPrice] = useState(0);

  const [stakefee, setstakefee] = useState(0);
  const [totalStaked, settotalStaked] = useState(0);
  const [nftSymbol, setNftSymbol] = useState("");
  const [stakeTokenAddress, setstakeTokenAddress] = useState("");

  const [approval, setApproval] = useState(0);
  const [claimAllowed, setClaimAllowed] = useState(false);

  const [userStaked, setUserStaked] = useState(0);
  const [endTime, setEndTime] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [stakingAmount, setStakingAmount] = useState(0);
  const [stakingAmountOg, setStakingAmountOg] = useState(0);

  const [limit, setLimit] = useState(0);
  const [buyLink, setBuyLink] = useState("");

  const [depositError, setDepositError] = useState("");

  const [depositmodal, setDepositmodal] = useState(false);
  const depositToggle = () => setDepositmodal(!depositmodal);

  const [unstakeModal, setUnstakemodal] = useState(false);
  const unstakeToggle = () => setUnstakemodal(!unstakeModal);
  const [unstakeRedeemableModal, setunstakeRedeemableModal] = useState(false);
  const [unstakeModel1,setUnstakeModel1] = useState(false);
  const unstakeToggleRedeemable = () =>
    setunstakeRedeemableModal(!unstakeRedeemableModal);

  async function setMaxDeposit() {
    setdAmount(balance);
    setDepositAmount(balance);
  }

  const handleDepositChange = (e) => {
    let _amt = e.target.value;
    _amt = parseInt(_amt);
    setDepositAmount(_amt);
    setdAmount(_amt);
  };

  const handleUnstakeChange = (e) => {
    setunstakeId(parseInt(e.target.value))  
  };

    async function unstakeToken() {
      setDepositError(false);

      let id = parseInt(unstakeId);
      const isIdExist = stakedid.includes(unstakeId+"");
      console.log("isIdExist", isIdExist);
      // alert(limit);

      if (!id) {
        setDepositError(
          "Invalid Nft Id"
        );
        return false;
      }
      if (!isIdExist) {
        setDepositError(
          "Invalid Nft Id"
        );
        return false;
      }

  
      let _web3 = new Web3(web3Provider);
      const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);
      let _nfttoken = await _stakeContract.methods.nftAddress().call();  
      const _nftContract = new _web3.eth.Contract(STAKENFT_ABI, _nfttoken);
      const isApproved = await _nftContract.methods.isApprovedForAll(wallet.address,NFT_STAKE).call();


      const passingArgumets = [id];  
      setModal(!modal);
      
      if (!isApproved) {
        console.log("calling approval");
       await _nftContract.methods
        .setApprovalForAll(NFT_STAKE,true)
        .send({
          from: wallet.address,
        })
        .on("receipt", function (receipt) {
        })
        .on("error", function (receipt) {
          setModal(modal);
        });
      }

     await _stakeContract.methods
        .withdrawToken(passingArgumets)
        .send({
          from: wallet.address,
        })
        .on("receipt", function (receipt) {
          setModal(modal);
          depositToggle();
          initContracts();
        })
        .on("error", function (receipt) {
          setModal(modal);
        });
    }


  async function depositToken() {
    setDepositError(false);
    let _amount = parseInt(depositAmount);
    // alert(limit);
    if (_amount > limit) {
      setDepositError(
        "Invalid Deposit Amount. Please enter a multiplier less than equal to " +
          limit
      );
      return false;
    }

    if (balance <= 0) {
      setDepositError(
        "Insufficient Balance. Please fund your wallet with some " +
          symbol +
          " Token and try again."
      );
      return false;
    }

    if (depositAmount <= 0 || depositAmount == "") {
      setDepositError(
        "Invalid Deposit Amount. Please enter a valid amount greater than 0."
      );
      return false;
    }

    let _web3 = new Web3(web3Provider);
    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    console.log(_amount);

    setModal(!modal);
    _stakeContract.methods
      .stakeTokens(_amount)
      .send({
        from: wallet.address,
      })
      .on("receipt", function (receipt) {
        setModal(modal);
        depositToggle();
        initContracts();
      })
      .on("error", function (receipt) {
        setModal(modal);
      });
  }

  const getTime = async () => {
    let _web3 = new Web3(web3Provider);
    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    let _unlockTime
    // let _unlockTime = await _stakeContract.methods
    //   .userclaimtime(wallet.address)
    //   .call();
    let endTime;

    let _currentTime = new Date().getTime() / 1e3;

    if (_unlockTime > 0 && _currentTime < _unlockTime) {
      setClaimAllowed(false);

      let remainingSeconds = _unlockTime - _currentTime;
      // console.log("Remaining Sec" , remainingSeconds);

      let remainingDay = Math.floor(remainingSeconds / (60 * 60 * 24));
      let remainingHour = Math.floor(
        (remainingSeconds % (60 * 60 * 24)) / (60 * 60)
      );
      let remainingMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
      let remainingSec = Math.floor(remainingSeconds % 60);
      if (remainingDay > 0) {
        endTime =
          remainingDay +
          "d : " +
          remainingHour +
          "h : " +
          remainingMinutes +
          "m";
        setEndTime(endTime);
      } else {
        endTime =
          remainingHour +
          "h : " +
          remainingMinutes +
          "m : " +
          remainingSec +
          "s";
        setEndTime(endTime);
      }
    } else if (_unlockTime < _currentTime) {
      setEndTime("NA");
      setClaimAllowed(true);
    }
  };

  const initContracts = async () => {
    let _web3 = new Web3(web3Provider);
    console.log(NFT_STAKE);
    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE); 

    let _nfttoken = await _stakeContract.methods.nftAddress().call();
    let _staketoken = await _stakeContract.methods.tokenAddress().call();
    let _stakinglimit = await _stakeContract.methods.stakinglimit().call();

    setLimit(_stakinglimit);

    const _nftContract = new _web3.eth.Contract(STAKENFT_ABI, _nfttoken);
    let _nftsymbol = await _nftContract.methods.symbol().call();

    setNftSymbol(_nftsymbol);

    const _tokenContract = new _web3.eth.Contract(TOKEN_ABI, _staketoken);
    setstakeTokenAddress(_staketoken);
    // let sprice = await getPrice(_staketoken, STAKE_CONTRACT[props.index].ape);
    // let sprice = 0 ;
    // setsTokenPrice(sprice);
    let _symbol = await _tokenContract.methods.symbol().call();
    let _decimals = await _tokenContract.methods.decimals().call();

    let _stakingAmount = await _stakeContract.methods.stakingamount().call();
    if (STAKE_CONTRACT[props.index].fee == 1) {
      let _stakingFee = await _stakeContract.methods.fees().call();
      setstakefee(_stakingFee / STAKE_CONTRACT[props.index].feedecimal);
    }
    let _totalStaked = await _tokenContract.methods.balanceOf(NFT_STAKE).call();
    _totalStaked = parseFloat(_totalStaked / 1e1 ** _decimals).toFixed(2);
    settotalStaked(_totalStaked);

    setStakingAmount(_stakingAmount / 1e1 ** _decimals);
    setStakingAmountOg(_stakingAmount);

    setSymbol(_symbol);

    if (wallet.address) {
      let _userStaked = await _stakeContract.methods
        .userStaked(wallet.address)
        .call();
      console.log(_userStaked);
      setUserStaked(_userStaked / 1e1 ** _decimals);

      const _userStakedIds =  await _stakeContract.methods
      .getStakedNfts(wallet.address)
      .call();
      console.log("_userStakedIds", _userStakedIds);
      setStakedId(_userStakedIds)

      let _approval = await _tokenContract.methods
        .allowance(wallet.address, NFT_STAKE)
        .call();
      console.log(_approval);
      setApproval(_approval);
      let _balance = await _tokenContract.methods
        .balanceOf(wallet.address)
        .call();
      _balance = parseFloat(_balance / 1e1 ** _decimals).toFixed(2);
      setBalance(_balance);
    }
  };

  async function claim() {
    let _web3 = new Web3(web3Provider);

    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    setModal(!modal);
    // document.getElementById("exampleModalCenter").modal('show')

    _stakeContract.methods
      .redeemNft()
      .send({ from: wallet.address })
      .on("receipt", function (receipt) {
        initContracts();

        setModal(modal);
      })

      .on("error", function (error, receipt) {
        setModal(modal);
      });
  }

  async function unstakeRedeemable() {
    console.log("unstakeRedeemable");
    setunstakeRedeemableModal(!unstakeRedeemableModal)
    setUnstakeModel1(!unstakeModel1);
     

    // const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    // setModal(!modal);  
    // document.getElementById("exampleModalCenter").modal('show')

    // _stakeContract.methods
    //   .emergencyunstaketoken()
    //   .send({ from: wallet.address })
    //   .on("receipt", function (receipt) {
    //     initContracts();
    //     unstakeToggleRedeemable();
    //     setModal(modal);
    //   })

    //   .on("error", function (error, receipt) {
    //     setModal(modal);
    //   });
  }

  async function unstake() {
    let _web3 = new Web3(web3Provider);

    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    setModal(!modal);
    // document.getElementById("exampleModalCenter").modal('show')

    _stakeContract.methods
      .emergencyunstaketoken()
      .send({ from: wallet.address })
      .on("receipt", function (receipt) {
        initContracts();
        unstakeToggle();
        setModal(modal);
      })

      .on("error", function (error, receipt) {
        setModal(modal);
      });
  }

  const getTotalStaked = async () => {
    var v = POOL_CONTRACT[props.index];
    let _web3 = new Web3(web3Provider);
    var TOKEN_POOL_ABI = null;
    var settTotalStaked = null;
    let _tokenPoolContract = new _web3.eth.Contract(TOKEN_POOL_ABI, v.address);
    let totalStaked = await _tokenPoolContract.methods.totalStaked().call();
    let stakeTokenAddress = await _tokenPoolContract.methods
      .stakeToken()
      .call();
    let _tokenContract = new _web3.eth.Contract(TOKEN_ABI, stakeTokenAddress);
    let stotalDecimals = await _tokenContract.methods.decimals().call();

    // temp['totalStaked'] = parseFloat(totalStaked/1e18).toFixed(4) ;
    if (totalStaked > 1e1 ** stotalDecimals) {
      totalStaked = parseFloat(totalStaked / 1e1 ** stotalDecimals).toFixed(4);
    } else {
      totalStaked = parseFloat(totalStaked / 1e1 ** stotalDecimals).toFixed(8);
    }
    settTotalStaked(totalStaked);
  };

  const getPrice = async (_token, ape) => {
    let _web3 = new Web3(web3Provider);
    const BNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; // BNB or another token
    const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; //BUSD

    let _tokenContract = new _web3.eth.Contract(TOKEN_ABI, _token);
    let stotalDecimals = await _tokenContract.methods.decimals().call();

    let SROUTER_ADDRESS = null;

    if (ape == 0) {
      SROUTER_ADDRESS = "0x10ed43c718714eb63d5aa57b78b54704e256024e";
      setBuyLink("https://pancakeswap.finance/swap?outputCurrency=");
    } else if (ape == 1) {
      SROUTER_ADDRESS = "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7";
      setBuyLink("https://apeswap.finance/swap?outputCurrency=");
    } else if (ape == 2) {
      SROUTER_ADDRESS = "0x05E61E0cDcD2170a76F9568a110CEe3AFdD6c46f";
      setBuyLink("https://app.knightswap.financial/swap?outputCurrency=");
    }

    let _amountUSD = 1 * 10 ** 18;

    let _routerContractS = new _web3.eth.Contract(ROUTER_ABI, SROUTER_ADDRESS);

    let _resultUSDS = await _routerContractS.methods
      .getAmountsOut(_amountUSD + "", [BNB, BUSD])
      .call();
    let BNBUsdS = _resultUSDS[1] / 10 ** 18;

    let _stokenPrice = 0;

    let _amountS = 1 * 10 ** stotalDecimals;
    let _resultS = await _routerContractS.methods
      .getAmountsOut(_amountS + "", [_token, BNB])
      .call();
    _stokenPrice = _resultS[1] / 10 ** 18; // price of 1 CAKE in BUSD

    _stokenPrice = _stokenPrice * BNBUsdS;

    return _stokenPrice;
  };

  async function approveToken() {
    console.log("approve");
    let _web3 = new Web3(web3Provider);

    const _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, NFT_STAKE);

    let _staketoken = await _stakeContract.methods.tokenAddress().call();

    const _tokenContract = new _web3.eth.Contract(TOKEN_ABI, _staketoken);

    setModal(!modal);
    // document.getElementById("exampleModalCenter").modal('show')

    const _amount = _web3.utils.toWei("10000000000000000000000000000");
    _tokenContract.methods
      .approve(NFT_STAKE, _amount)
      .send({ from: wallet.address })
      .on("receipt", function (receipt) {
        initContracts();

        setModal(modal);
      })

      .on("error", function (error, receipt) {
        setModal(modal);
      });
  }

  useEffect(() => {
    // if (window.ethereum) {
    //   web3Provider = window.ethereum;
    // } else {
    //   web3Provider = new Web3.providers.HttpProvider(Config.RPC_URL);
    // }
    web3Provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s3.binance.org:8545/");
  }, []);

  useEffect(() => {
    initContracts();

    if (wallet.address) {
      setInterval(function () {
        getTime();
      }, 1000);
    }
  }, [wallet.address]);

  const [show,setShow] = useState(false);
  const [showStake,setShowStake] = useState(true);

  return (
    <div>
      <div className="mt-4 md:m-4 border border-[#0082FF]">
        <div className="wrp-satke  onlyDesktop  flex justify-between w-full text-center"  onClick={()=>{setShow(!show)}}>
          <div class="panel-heading   flex justify-between w-full text-center" role="tab" id="accordion">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse" + props.index}
              aria-expanded="true"
              aria-controls={"collapse" + props.index}
              className="w-full flex items-center"
            >
              <div className="wrp-bison1 flex flex-col md:flex-row w-full p-4 items-center justify-between ">
                <div className="bison-c1 bg-bison">
                  <div className="img-bison">
                    <img src={STAKE_CONTRACT[props.index].image} className=" h-20 w-20"/>
                  </div>
                </div>
                <div className="token1">
                  {userStaked > 0 && (
                    <h3 className="text-color-nft">
                      {userStaked / stakingAmount} {nftSymbol} NFT
                    </h3>
                  )}
                  {userStaked == 0 && <h3 className="text-color-nft">0 {nftSymbol} NFT</h3>}
                </div>
                <div className="apr">
                  <div className="wrp-arp">
                    <div className="apr-c mr-right"></div>
                    <div className="apr-c1">
                      <h3 className="text-color-nft">
                        {userStaked} {symbol}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="apr">
                  <div className="wrp-arp">
                    <div className="apr-c mr-right"></div>
                    {STAKE_CONTRACT[props.index].fee == 1 ? (
                      <div className="apr-c1">
                        <h3 className="text-color-nft">Redeemable</h3>
                      </div>
                    ) : (
                      <div className="apr-c1">
                        <h3 className="text-color-nft">Non-Redeemable</h3>
                      </div>
                    )}
                  </div>
                </div>
                <div className="q-marg">
                  <h3 className="text-color-nft">{endTime}</h3>
                </div>
                <div className="bison-btn p-4">
                  {wallet.address &&
                    userStaked == 0 &&
                    STAKE_CONTRACT[props.index].status == 1 && (
                      <button className="text-white rounded-md p-3 active-section2 font-bold" onClick={depositToggle}>Stake</button>
                    )}
                   {/* <button className="bg-white rounded-md p-3  font-bold" onClick={depositToggle}>Stake</button>  */}
                  {wallet.address &&
                    userStaked > 0 &&
                    !claimAllowed &&
                    STAKE_CONTRACT[props.index].fee == 0 && (
                      <button onClick={unstakeToggle} className="text-white active-section2 rounded-md p-3 ">Unstake</button>
                    )}
                  {wallet.address &&
                    userStaked > 0 &&
                    STAKE_CONTRACT[props.index].fee == 1 && (
                      <button
                        className="mr-3  rounded-md p-3 active-section2 text-white"
                        onClick={unstakeToggleRedeemable}
                      >
                        Unstake
                      </button>
                    )}
                  {wallet.address && userStaked > 0 && claimAllowed && (
                    <button onClick={claim} className="bg-white rounded-md p-3 active-section2">Claim</button>
                  )}
                  {!wallet.address && <ConnectButton />}
                </div>
              </div>
            </a>
          </div>


{
    modal?<div className="flex justify-center absolute items-center top-52 inset-0 z-30">
    <div isOpen={modal} toggle={toggle}  centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">
    <main>
       <div className="modaltext text-center mt-4" >Transaction is Processing...</div>      
       </main>
       <button className="depositButton mr-auto ml-auto mb-5 bg-blue-500 rounded-sm p-2" onClick={toggle}>Close</button>
     </div>
     </div>:""
}


{
    unstakeRedeemableModal?<div className="flex justify-center absolute items-center top-52 inset-0 z-20">
            <div isOpen={unstakeRedeemableModal} toggle={unstakeToggleRedeemable}  centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">
<main>
  <span className="mt-5 text-center" >Please confirm if you want to unstake.</span>
</main>
<footer>
        <button className="depositButton mr-3 depositButton ml-auto mb-5 bg-blue-500 rounded-sm p-2" onClick={unstakeRedeemable}>Unstake</button>
  <button className="depositButton depositButton mr-auto ml-auto mb-5 bg-blue-500 rounded-sm p-2" onClick={unstakeToggleRedeemable}>Cancel</button>
</footer>
</div>
    </div>:""
}

{
    unstakeModal?<div className="flex justify-center absolute items-center top-10 inset-0 z-10">
    <div isOpen={unstakeModal} toggle={unstakeToggle}  centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">
      <main>
        <span className="mt-5 text-center" >"Warning: you will lose all the progress so far if you unstake your tokens now, So if you decided to stake again the timer will begin from start again"</span>
      </main>
      <footer>
              <button className="depositButton mr-3 p-2 bg-blue-500 rounded-sm" onClick={unstake}>Proceed</button>
        <button className="depositButton p-2 bg-blue-500 rounded-sm" onClick={unstakeToggle}>Cancel</button>
      </footer>
    </div>
    </div>:""
}




    {
        depositmodal?<div className="flex justify-center absolute items-start -top-50 inset-0 z-10">
            <div isOpen={depositmodal} toggle={unstakeToggle}  centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">
        <main>       
           <div className="moveRight">
               <span> 
                  Your Balance<br />
                  {balance} {symbol}
               </span>
           </div>
          <label><br />Enter Multiples of NFT to stake for 
          </label>
          <input className="outline rounded" onChange={handleDepositChange} type="number" step="1" min="1" value={damount} />
          <span className="mt-5" >Cost: {damount*stakingAmount } {symbol}</span><br />                                        <div>
          {
              depositError &&
              <span className="error">{depositError}</span>
          }
            </div>
        </main>
        <footer className="mt-4">
            {
                (approval > 0 && approval > stakingAmountOg*damount) &&
                <button className="depositButton mr-3 mr-auto ml-auto mb-5 bg-blue-500 rounded-sm p-2" onClick={depositToken}>Deposit</button>
            }
            {
                (approval == 0 || approval < stakingAmountOg*damount) &&
                <button className="depositButton mr-3 bg-blue-500 p-2 rounded" onClick={approveToken}>Approve</button> 
            }
          <button className="depositButton bg-blue-500 p-2 rounded" onClick={depositToggle}>Cancel</button>
        </footer>
      </div>
        </div>:""
    }

{
        unstakeModel1?<div className="flex justify-center absolute items-start -top-50 inset-0 z-10">
            <div isOpen={depositmodal} toggle={unstakeToggle}  centered={true} className="bg-white w-1/2 rounded-sm p-5 justify-center">
        <main>       
           {/* <div className="moveRight">
               <span> 
                  Your Balance<br />
                  {balance} {symbol}
               </span>
           </div> */}
          <label><br />Enter Nft Id's to unstake 
          </label>
          <input className="outline rounded ml-2" onChange={handleUnstakeChange} type="number" step="1" min="1" value={unstakeId} />
          {/* <span className="mt-5" >Cost: {damount*stakingAmount } {symbol}</span><br />            */}
                                       <div>
          {
              depositError &&
              <span className="error">{depositError}</span>
          }
            </div>
        </main>
        <footer>
            {
                <button className="depositButton mr-3 mt-3 ml-auto mb-5 bg-blue-500 rounded-sm p-2" onClick={unstakeToken}>Unstake</button>
            }
  
          <button className="depositButton bg-blue-500 p-2 rounded" onClick={()=>{setUnstakeModel1(!unstakeModel1)}}>Cancel</button>
        </footer>
      </div>
        </div>:""
    }
 

        </div>
        <div className="mb-3 p-4 ">
              <div className="faq-answer" itemprop="acceptedAnswer">
                <div itemprop="text">
                {
                    show?<div className="bottom-list text-white gap-5 flex flex-col md:flex-row justify-between max-w-full">
                    <div className="w-full">
                    <div className="wrp-arp2 flex justify-between">
                      <div className="apr-c">
                        <p>Total {symbol} Staked:</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>{totalStaked}</p>
                      </div>
                    </div>

                    <div className="wrp-arp2 flex justify-between">
                      <div className="apr-c">
                        <p>Stake Fee</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>{stakefee}%</p>
                      </div>
                    </div>

                    <div className="wrp-arp2 flex justify-between">
                      <div className="apr-c">
                        <p>Nft Staked Id's</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>{stakedid.map((data)=>{
                          return(
                            <>
                              {data},
                            </>
                          )
                        })}</p>
                      </div>
                    </div>
                    </div>
                    
                    <div className="w-full">
                    <div className="wrp-arp2 flex justify-between flex-1">
                      <div className="apr-c">
                        <p>Stake</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>{symbol}</p>
                      </div>
                    </div>
                    <div className="wrp-arp2 flex justify-between flex-1">
                      <div className="apr-c">
                        <p>Staked Value</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>${parseFloat(userStaked * sTokenPrice).toFixed()}</p>
                      </div>
                    </div>

                    
                    <div className="wrp-arp2 flex flex-col md:flex-row justify-between flex-1">
                      <div className="apr-c bscscan">
                        <a
                          target="_blank"
                          href={EX_LINK + STAKE_CONTRACT[props.index].nft}
                         className="active-section2">
                          View on BscScan
                        </a>
                      </div>
                      <div className="apr-c bscscan">
                        <a target="_blank " className="active-section2" href={buyLink + stakeTokenAddress}>
                          Buy {symbol} Token
                        </a>
                      </div>
                    </div>
                    
                    </div>
                    
                    <div className="wrp-arp2 w-full">
                      <div className="apr-c">
                        <p>Your Staked</p>
                      </div>
                      <div className="apr-c text-right">
                        <p>
                          {userStaked} {symbol}
                        </p>
                      </div>
                    </div>
                  </div>:""
                }
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default NftFarmStackCard;
