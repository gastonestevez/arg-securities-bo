import type { NextPage } from 'next'
import Head from 'next/head'

import InscriptionForm from '../features/InscriptionForm'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arg Securities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <InscriptionForm />
    </div>
  )
}

export default IndexPage
