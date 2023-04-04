import Context from '@/components/context/Context';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from 'react-redux';
// import { store } from '@reduxjs/toolkit'
import { persistor, useStore } from '@/state';
import { PersistGate } from 'redux-persist/integration/react';


const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
};


export default function App({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)
    
  return (
   <> 
  <Provider store={store}>
  <Context>
  <Web3ReactProvider getLibrary={getLibrary}>
  {/* <PersistGate loading={null} persistor={persistor}> */}
  <Component {...pageProps} /> 
  {/* </PersistGate> */}
  </Web3ReactProvider>
  </Context>
  <Footer/> 
  </Provider>
  </>
  )
}
