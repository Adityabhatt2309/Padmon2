import { useEffect, useMemo } from 'react'
import { useSelector, batch } from 'react-redux'
import { useAppDispatch } from 'state'

import {fetchGlobalPoolData} from './index'


export const useGetGlobalContractData = () => {
    return useSelector((state) => {
      return state.pools.globalPoolData
    })
  }

export const useFetchGlobalPoolData = () => {

  // console.log("sdgherioggiosehgksehgio");
    
    const dispatch = useAppDispatch()
    dispatch(fetchGlobalPoolData())
    // console.log("hihihi");
    // return useSelector((state)=>{
    //   return state
    // })
  
    // useEffect(() => {
    //   if (account) {
    //     dispatch(fetchUserPaladin({ account }))
    //   }
    // }, [account, dispatch])
  }
  

