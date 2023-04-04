import { useFetchGlobalPoolData, useGetGlobalContractData} from '@/state/wizardpool/hooks';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../state/wizardpool/fetchglobalPoolData';

const showData = () => {
  useFetchGlobalPoolData();
  // const Data =  useFetchGlobalPoolData()
  // console.log(Data);
  const data = useGetGlobalContractData()
  console.log("data", data);
    // const dispatch = useDispatch();
    // const users = useSelector(state => state.globalPoolData);
      // console.log("users", users);

  return (
    <div style={{color:"white"}}>
    {/* {data.pools.globalData} */}
    {/* <p> {data.pools.userPoolData.pendingReward}</p> */}
    hyyy
    </div>
  )
}
export default showData

