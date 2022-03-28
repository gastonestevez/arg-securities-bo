import { Head } from "next/document"
import React from "react"
import Navbar from "../../components/Navbar"
import InscriptionForm from "../../features/InscriptionForm"
import { RelatedPersonInscriptionForm } from "../../features/RelatedPersonInscriptionForm/RelatedPersonInscriptionForm"

export const Titular = () => {
    return (
        <div>
            <Head>
                <title>Arg Securities</title>
                <link rel="icon" href="/favicon.jpg" />
            </Head>
            <header>
                <Navbar />
            </header>
            <RelatedPersonInscriptionForm />
        </div>
    )
}
