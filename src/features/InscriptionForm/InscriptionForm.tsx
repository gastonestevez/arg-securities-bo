import {
    Alert,
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    Grid,
    Typography,
} from "@mui/material"
import React, { useState } from "react"
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
import ReCAPTCHA from "react-google-recaptcha"
import { useAppDispatch } from "../../app/hooks"
import { registerPersonaFisica } from "./InscriptionThunk"

export const InscriptionForm = () => {
    const recaptchaRef = React.useRef(null)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: personaFisicaInitialValues,
        validationSchema: personaFisicaValidationSchema,
        onSubmit: async (values) => {
            const personaFisicaDTO = {
                titular: {
                    personaFisica: true,
                    ...values,
                    datosConyuge: [
                        values.datosConyuge,
                    ]
                }
            }
            dispatch(registerPersonaFisica(personaFisicaDTO))
            console.log({personaFisicaDTO})

        },
    })
    console.log(formik.errors)
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
                    Persona física
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
                            {formik.values.datosPersonales.estadoCivil ===
                                "Casado" && (
                                <>
                                    <DatosConyuge fmk={formik} />
                                    <Grid item xs={12}>
                                        <Divider sx={{ marginTop: 2 }} />
                                    </Grid>
                                </>
                            )}

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
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <ReCAPTCHA
                                    sitekey="6LcPTAweAAAAAJslpywllHcuD4SJy0rZhnXk0zOx"
                                    ref={recaptchaRef}
                                    badge={"bottomright"}
                                    onChange={(response) => {
                                        formik.setFieldValue(
                                            "recaptcha",
                                            response
                                        )
                                    }}
                                />
                            </Grid>
                            {formik.errors.recaptcha && (
                                <Grid item xs={12}>
                                    <Alert severity="error" variant="outlined">
                                        {formik.errors.recaptcha}
                                    </Alert>
                                </Grid>
                            )}
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
