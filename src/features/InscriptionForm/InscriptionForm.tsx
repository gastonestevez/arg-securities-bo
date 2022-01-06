import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
import { DatosConyuge } from "../../components/Inscription/DatosConyuge"
import { DatosFiscalesNacionales } from "../../components/Inscription/DatosFiscalesNacionales"
import { DatosPersonales } from "../../components/Inscription/DatosPersonales"
import { DatosPrincipales } from "../../components/Inscription/DatosPrincipales"
import { DomiciliosUrbanos } from "../../components/Inscription/DomiciliosUrbanos"
import { MediosDeComunicacion } from "../../components/Inscription/MediosDeComunicacion"

export const InscriptionForm = () => {
    const handleOnSubmit = () => {
        console.log("ok submit")
    }

    return (
        <Container maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    Documentación a presentar
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleOnSubmit}
                    sx={{ mt: 4}}
                >
                    <Grid container spacing={2}>
                        <DatosPrincipales />
                        <DatosFiscalesNacionales />
                        <DatosPersonales />
                        <MediosDeComunicacion />
                        <DomiciliosUrbanos />
                        <DatosConyuge />
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
