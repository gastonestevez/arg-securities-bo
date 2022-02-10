import React from "react"
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
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { AppState } from "../../app/store"
import { FormikProvider, useFormik } from "formik"
import { formatDates } from "../../form/formatDates"
import { personaFisicaInitialValues } from "../../form/initialValues"
import { personaFisicaValidationSchema } from "../../validations/validations"
import { toggleCompletedForm } from "../InscriptionForm/completedFormSlice"
import { registerPersonaFisica } from "../InscriptionForm/InscriptionThunk"
import { DatosPrincipalesIdeal } from "../../components/Juridic/DatosPrincipalesIdeal"
import { DatosOrganizacion } from "../../components/Juridic/DatosOrganizacion"
import { DatosFiscalesNacionales } from "../../components/Inscription/DatosFiscalesNacionales"
import { Registro } from "../../components/Juridic/Registro"
import { MediosDeComunicacion } from "../../components/Inscription/MediosDeComunicacion"
import { DomiciliosUrbanos } from "../../components/Inscription/DomiciliosUrbanos"
import { PatrimonioYBlanace } from "../../components/Juridic/PatrimonioYBalance"
import { Declaraciones } from "../../components/Inscription/Declaraciones"
import { ActividadOrganizacion } from "../../components/Juridic/ActividadOrganizacion"
import Message from "../../components/Message"
import ReCAPTCHA from "react-google-recaptcha"
import TermsAndConditionsContainer from "../../components/TermsAndConditions"

export const JuridicInscriptionForm = () => {
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
                    personaFisica: false,
                    ...values,
                    datosConyuge: values.datosConyuge?.nombre
                        ? [values.datosConyuge]
                        : [],
                    perfilInversor: {
                        experiencia: "Ninguna",
                        perfilPersonal: "Conservador",
                    },
                    mediocomunicacion: [],
                },
                disposicionesGenerales: {
                    horizonteInversion: null,
                    perfilDeInversion: null,
                },
            }
            try {
                dispatch(registerPersonaFisica(formatDates(personaFisicaDTO)))
                dispatch(toggleCompletedForm())
                router.push("/registerSuccess")
            } catch (e) {
                console.error(e)
            }
        },
    })
    return (
        <>
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
                        Registro de Persona Jurídica
                    </Typography>
                    <FormikProvider value={formik}>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 4 }}
                        >
                            <Grid container spacing={2}>
                                <DatosPrincipalesIdeal fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <DatosFiscalesNacionales fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <DatosOrganizacion fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <Registro fmk={formik} />

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

                                <PatrimonioYBlanace fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <Declaraciones fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <ActividadOrganizacion fmk={formik} />

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
                                        <Alert
                                            severity="error"
                                            variant="outlined"
                                        >
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
        </>
    )
}
