const getGlobalPoolData = async () => {
   
    try{
        const depositRewards = contractBSC.methods.depositRewards().call();
        const getStakeTokenFeeBalance = contractETH.methods.getStakeTokenFeeBalance().call();
        const totalStakeTokenBalance = contractARB.methods.totalStakeTokenBalance().call();

        const [bscraise, ethraise, arbraise] = await Promise.all([
            depositRewards,
            getStakeTokenFeeBalance,
            totalStakeTokenBalance,
        ]);
        }catch(error){
            console.log(error);
        }


    // const contractresponse = await callpaladinContractData()
    const obj = {
        apr: '1',
        bonusEndBlock: '2'   
    }
    return obj
  }

  export const getPadmonContractData = async () => {
    const contractresponse = await getGlobalPoolData()
    return contractresponse
    }
  
 export default getGlobalPoolData; 