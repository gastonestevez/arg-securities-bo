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
import React, { useEffect, useState } from "react"
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
import { formatDates } from "../../form/formatDates"
import TermsAndConditionsContainer from "../../components/TermsAndConditions"
import { createMessage } from "./messageSlice"
import { useSelector } from "react-redux"
import { AppState } from "../../app/store"
import Message from "../../components/Message"
import { toggleCompletedForm } from "./completedFormSlice"
import { useRouter } from "next/router"

export const InscriptionForm = () => {
    const recaptchaRef = React.useRef(null)
    const dispatch = useAppDispatch()
    const message = useSelector((state: AppState) => state.message)
    const router = useRouter()

    const formik = useFormik({
        initialValues: personaFisicaInitialValues,
        validationSchema: personaFisicaValidationSchema,
        onSubmit: async (values) => {
            const personaFisicaDTO = {
                titular: {
                    personaFisica: true,
                    ...values,
                    datosConyuge: values.datosConyuge?.nombre
                        ? [values.datosConyuge]
                        : [],
                    perfilInversor: {
                        experiencia: "Ninguna",
                        perfilPersonal: "Conservador",
                    },
                    mediocomunicacion: [
                        {
                            tipo: "E-Mail",
                            medio: "gaston@asd.com",
                            uso: "Personal",
                            principal: true,
                            notas: "una nota",
                        },
                        {
                            tipo: "Teléfono",
                            medio: "1158499585",
                            uso: "Personal",
                            principal: false,
                            notas: "una nota",
                        },
                    ],
                },
                disposicionesGenerales: {
                    horizonteInversion: null,
                    perfilDeInversion: null,
                },
            }
            try {
                dispatch(registerPersonaFisica(formatDates(personaFisicaDTO)))
                dispatch(toggleCompletedForm())
                router.push('/registerSuccess')
            } catch(e){
                console.error(e);
            }

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
                    Registro de Persona Física
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
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <TermsAndConditionsContainer fmk={formik} />
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

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

                            {message.active && (
                                <Grid item xs={12}>
                                    <Message
                                        title={message.title}
                                        type={message.type}
                                        message={message.message}
                                    />
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
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Box>
                </FormikProvider>
            </Box>
        </Container>
    )
}
