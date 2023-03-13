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
        <title>Let's invest in the future of blockchain. together</title>
        <meta name="description" content="Let's invest in the future of blockchain. together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
