import NftStack from '@/components/NftStack'
import Head from 'next/head'


const NFT = () => {
  return (
    <> <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
     {/* <meta charSet="utf-8" />
     <meta name="description" content="Let's invest in the future of blockchain. together" />
     <meta property="og:title" content="Let's invest in the future of blockchain. together"  key="ogtitle" />
     <meta property="og:description" content="Let's invest in the future of blockchain. together"  key="ogdesc" /> */}
      <title>PADMON-DAO || Let's invest in the future of blockchain. together</title>
      {/* <meta name="description" content="Let's invest in the future of blockchain. together" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta property="og:title" content="My page title" key="title" /> */}
      {/* <meta property="og:title" content="My new title" key="title" /> */}
      <link rel="icon" href="/assets/favicon.ico" />
    </Head> 
      <div>
      <NftStack/>
    </div>
    </>
  )
}

export default NFT
