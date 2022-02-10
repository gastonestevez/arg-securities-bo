import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import JuridicInscriptionForm from '../../features/JuridicInscriptionForm'

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
        <JuridicInscriptionForm />
        
    </div>
  )
}

export default IndexPage
