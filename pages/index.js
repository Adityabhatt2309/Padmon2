import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Roadmap from '@/components/Roadmap/Roadmap'
import Features from '@/components/Features/Features'
import Testimonial from '@/components/Testimonial/Testimonial'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
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
     <main>
      <section id='roadmap'>
        <Header/>
        {/* <Testimonial/> */}
        <Features/>
        <Roadmap/>
      </section>
     </main>
    </>
  )
}
