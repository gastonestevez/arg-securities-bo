import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import InscriptionForm from '../features/InscriptionForm'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arg Securities</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <header>
        <Navbar />
      </header>
        <InscriptionForm />
        
    </div>
  )
}

export default IndexPage
