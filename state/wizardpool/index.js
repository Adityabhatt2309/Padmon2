import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import getWizardGlobalPoolData, { getWizardUserPoolContractData } from './fetchGlobal'
import getGlobalPoolData from './fetchglobalPoolData';


export const initialState ={
  id: '',  
  userPoolData:{
        pendingReward:"100",
        amountStaked:"",
        rewardDebt: "",
  },

  globalPoolData:{
    apr:"",
    bonusEndBlock:"",
    getStakeTokenFeeBalance:"",
    allocPoint:"",
    lastRewardBlock:"",
    accRewardTokenPerShare:"",
    rewardBalance:"",
    rewardPerBlock:"",
    rewardToken:"",
    stakeToken:"",
    startBlock:"",
    totalStakeTokenBalance:"",
    totalStaked:"",
    status:"",
  }
}

// export const fetchUserPaladin = createAsyncThunk(
//   'paladin/fetchUserPaladin',
//   async ({ account }) => {
//     const userData = await getWizardUserPoolContractData(account)
//     return userData
//   },
// )

// export const fetchPaladinMintData = createAsyncThunk('paladin/fetchPaladinMintData', async () => {
//   const mintData = await getPaladinMintData()
//   return mintData
// })

// export const fetchPaladinRedeemData = createAsyncThunk(
//   'paladin/fetchPaladinRedeemData',
//   async () => {
//     const redeemData = await getPaladinRedeemData()
//     return redeemData
//   },
// )

export const fetchGlobalPoolData = createAsyncThunk(
  'pools/fetchGlobalPoolData',
  async () => {
    console.log("fetchGlobalPoolData....");
    const data = await getGlobalPoolData()
    return data;
  },
)



// export const fetchPaladinContractData = createAsyncThunk(
//   'padmon/userData',
//   async () => {
//     const data = await getWizardUserPoolContractData()
//     return data
//   },
// )

export const PadmonSliceReducer = createSlice({
  name: 'PadmonPool',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchGlobalPoolData, (state) => {
    //   state.userPoolData = { ...initialState.userPoolData }
    // })

    // builder.addCase(fetchGlobalPoolData.fulfilled, (state, action) => {
    //   state.getGlobalPoolData = action.payload
    // })

    builder.addCase(fetchGlobalPoolData.fulfilled, (state, action) => {
      state.globalPoolData = action.payload
    })
  },
})
export default PadmonSliceReducer.reducer;
