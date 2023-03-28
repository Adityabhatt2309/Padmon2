import { useWeb3React } from "@web3-react/core";
import React, { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext();

const Context =({children})=>{
    const [openConnectModal, setOpenConnectModal] = useState(false);
    const toggleModalHandler = () => {
        setOpenConnectModal(!openConnectModal);
        console.log(openConnectModal,"openmodalConnectModal");
      };

      return (
        <GlobalContext.Provider
          value={{
            openConnectModal,
            toggleModalHandler
          }}
        >
          {children}
        </GlobalContext.Provider>
      );

}

export default Context;