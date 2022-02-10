import React from "react"
import Navbar from "../../components/Navbar"
import SuccessForm from "../../features/SuccessForm"
import Head from "next/head"

const registerSuccess = () => {
    return (
        <>
            <Head>
                <title>Arg Securities</title>
                <link rel="icon" href="/favicon.jpg" />

            </Head>
            <header>
                <Navbar />
            </header>
            <SuccessForm />
        </>
    )
}

export default registerSuccess