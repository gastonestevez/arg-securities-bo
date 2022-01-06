import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Typography,
} from "@mui/material"
import React from "react"
import { Actividades } from "../../components/Inscription/Actividades"
import { CuentasBancarias } from "../../components/Inscription/CuentasBancarias"
import { CuentasBancariasExterior } from "../../components/Inscription/CuentasBancariasExterior"
import { DatosConyuge } from "../../components/Inscription/DatosConyuge"
import { DatosFiscalesNacionales } from "../../components/Inscription/DatosFiscalesNacionales"
import { DatosPersonales } from "../../components/Inscription/DatosPersonales"
import { DatosPrincipales } from "../../components/Inscription/DatosPrincipales"
import { Declaraciones } from "../../components/Inscription/Declaraciones"
import { DomiciliosUrbanos } from "../../components/Inscription/DomiciliosUrbanos"
import { InformacionPatrimonial } from "../../components/Inscription/InformacionPatrimonial"
import { MediosDeComunicacion } from "../../components/Inscription/MediosDeComunicacion"
import { useFormik } from "formik"
import * as yup from "yup"

export const InscriptionForm = () => {
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
    })

    const formik = useFormik({
        initialValues: {},
        validationSchema: undefined,
        onSubmit: (values) => {
            console.log(values)
        },
    })

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
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 4 }}
                >
                    <Grid container spacing={2}>
                        <DatosPrincipales fmk={formik} />
                        {/* <DatosFiscalesNacionales />
                        <DatosPersonales />
                        <MediosDeComunicacion />
                        <DomiciliosUrbanos />
                        <CuentasBancarias />
                        <CuentasBancariasExterior />
                        <DatosConyuge />
                        <InformacionPatrimonial />
                        <Actividades />
                        <Declaraciones /> */}
                        <Grid item md={8} />
                        <Grid item xs={12} md={4}>
                            <Button fullWidth type="submit" variant="contained">
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
