import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
import { DatosFiscalesNacionales } from "../../components/Inscription/DatosFiscalesNacionales"
import { DatosPersonales } from "../../components/Inscription/DatosPersonales"
import { DatosPrincipales } from "../../components/Inscription/DatosPrincipales"

export const InscriptionForm = () => {
    const handleOnSubmit = () => {
        console.log("ok submit")
    }

    return (
        <Container maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 3,
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
                    sx={{ mt: 5 }}
                >
                    <Grid container spacing={2}>
                        <DatosPrincipales />
                        <DatosFiscalesNacionales />
                        <DatosPersonales />
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
