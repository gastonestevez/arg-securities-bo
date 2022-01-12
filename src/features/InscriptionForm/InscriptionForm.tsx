import {
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
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
import { FormikProvider, useFormik } from "formik"
import { personaFisicaValidationSchema } from "../../validations/validations"
import { personaFisicaInitialValues } from "../../form/initialValues"

export const InscriptionForm = () => {
    const formik = useFormik({
        initialValues: personaFisicaInitialValues,
        validationSchema: personaFisicaValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

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
                <FormikProvider value={formik}>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 4 }}
                    >
                        <Grid container spacing={2}>
                            <DatosPrincipales fmk={formik} />
                            
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <DatosFiscalesNacionales fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <DatosPersonales fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <MediosDeComunicacion fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <DomiciliosUrbanos fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <CuentasBancarias fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <CuentasBancariasExterior fmk={formik} />

                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <DatosConyuge fmk={formik} />
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <InformacionPatrimonial fmk={formik} />
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <Actividades fmk={formik} />
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <Declaraciones fmk={formik} />

                            <Grid item md={8} />
                            <Grid item xs={12} md={4}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                >
                                    Registrarse
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </FormikProvider>
            </Box>
        </Container>
    )
}
