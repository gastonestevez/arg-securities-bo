import React, { useEffect } from "react"
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
import {formatDates, formatJuridicDates} from "../../form/formatDates"
import { personaFisicaInitialValues } from "../../form/initialValues"
import { personaFisicaValidationSchema } from "../../validations/validations"
import { toggleCompletedForm } from "../InscriptionForm/completedFormSlice"
import {registerPersonaFisica, sendMailDocumentation} from "../InscriptionForm/InscriptionThunk"
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
import { personaJuridicaInitialValues } from "../../form/juridicInitialValues"
import { personaJuridicaValidationSchema } from "../../validations/juridicValidations"
import { CuentasBancarias } from "../../components/Inscription/CuentasBancarias"
import { DeclaracionPI } from "../../components/Juridic/DeclaracionPI"
import { LoadingButton } from "@mui/lab"
import WelcomeDisclaimer from "../../components/WelcomeDisclaimer";
import {PersonasRelacionadas} from "../../components/Inscription/PersonasRelacionadas";

export const JuridicInscriptionForm = () => {
    const recaptchaRef = React.useRef(null)
    const dispatch = useAppDispatch()
    const message = useSelector((state: AppState) => state.message)
    const { isLoading } = useSelector((state: AppState) => state.loading)
    const router = useRouter()
    const { personas } = useSelector(
        (state: AppState) => state.personasRelacionadas
    )

    const formik = useFormik({
        initialValues: personaJuridicaInitialValues,
        validationSchema: personaJuridicaValidationSchema,
        onSubmit: async (values) => {
            const personaRelacionada = personas.map((p) => {
                return {
                    tipo: p.tipo,
                    orden: p.index,
                    persona: {
                        personaFisica: true,
                        perfilInversor: {
                            experiencia: "Ninguna",
                            perfilPersonal: "Conservador",
                        },
                        ...p,
                    },
                }
            })
            const personaJuridicaDTO = {
                isPersonaJuridica: true,
                titular: {
                    personaFisica: false,
                    ...values,
                    registro: [values.registro],
                    patrimonioYBalance: [
                        {
                            ...values.patrimonioYBalance,
                            procedenciaDeFondos: {},
                        },
                    ],
                    actividadOrganizacion: [values.actividadOrganizacion],
                    perfilInversor: {
                        experiencia: "Ninguna",
                        perfilPersonal: "Conservador",
                    },
                },
                disposicionesGenerales: {
                    horizonteInversion: null,
                    perfilDeInversion: null,
                },
                personaRelacionada,
            }

            try {
                const response = await dispatch(
                    registerPersonaFisica(formatJuridicDates(personaJuridicaDTO))
                )

                await dispatch(sendMailDocumentation({
                    email: `${values.mediocomunicacion[0].medio}`,
                    cuit: `${personaJuridicaDTO.titular.datosFiscales.cuit}`,
                    name: `una nueva empresa`,
                    ...formatJuridicDates(personaJuridicaDTO),
                }))

                if (response != null) {
                    dispatch(toggleCompletedForm())
                    await router.push("/registerSuccess")
                }
            } catch (error) {
                console.log(error)
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
                                <Grid item xs={12}>
                                    <WelcomeDisclaimer />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

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

                                <CuentasBancarias fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <PatrimonioYBlanace fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <Declaraciones fmk={formik} juridic={true} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                <ActividadOrganizacion fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                {/*<DeclaracionPI fmk={formik} />*/}

                                {/*<Grid item xs={12}>*/}
                                {/*    <Divider sx={{ marginTop: 2 }} />*/}
                                {/*</Grid>*/}

                                <PersonasRelacionadas juridic={true} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid>

                                {/* <TermsAndConditionsContainer fmk={formik} />

                                <Grid item xs={12}>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Grid> */}

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

                                {!!Object.keys(formik.errors).length && (
                                    <Grid item xs={12}>
                                        <Message
                                            title={"Hay campos con errores"}
                                            type={"error"}
                                            message={`Corroborar campos en color rojo.`}
                                        />
                                    </Grid>
                                )}

                                <Grid item md={8} />

                                <Grid item xs={12} md={4}>
                                    <LoadingButton
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        loading={isLoading}
                                        loadingPosition="start"
                                    >
                                        Registrarse
                                    </LoadingButton>
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
