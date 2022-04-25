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
import { loginAunesa, registerPersonaFisica, sendMailDocumentation } from "./InscriptionThunk"
import { formatDates } from "../../form/formatDates"
import TermsAndConditionsContainer from "../../components/TermsAndConditions"
import { createMessage } from "./messageSlice"
import { useSelector } from "react-redux"
import { AppState } from "../../app/store"
import Message from "../../components/Message"
import { toggleCompletedForm } from "./completedFormSlice"
import { useRouter } from "next/router"
import LoadingButton from "@mui/lab/LoadingButton"
import { setLoading } from "./loadingSlice"
import { PersonasRelacionadas } from "../../components/Inscription/PersonasRelacionadas"

export const InscriptionForm = () => {
    const recaptchaRef = React.useRef(null)
    const dispatch = useAppDispatch()
    const message = useSelector((state: AppState) => state.message)
    const { isLoading } = useSelector((state: AppState) => state.loading)
    const { personas } = useSelector(
        (state: AppState) => state.personasRelacionadas
    )
    const router = useRouter()

    useEffect(() => {
        dispatch(setLoading(false))
    }, [dispatch])

    const formik = useFormik({
        initialValues: personaFisicaInitialValues,
        validationSchema: personaFisicaValidationSchema,
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
                    mediocomunicacion: [],
                },
                disposicionesGenerales: {
                    horizonteInversion: null,
                    perfilDeInversion: null,
                },
                personaRelacionada,
            }
            try {
                const response = await dispatch(
                    registerPersonaFisica(formatDates(personaFisicaDTO))
                    )

                await dispatch(sendMailDocumentation({
                    // dniFrenteDorso: values.dniFrenteDorso,
                    // constanciaOrigenDeFondos: values.constanciaOrigenDeFondos,
                    nombre: `${values.datosPrincipalesFisicas.nombre} ${values.datosPrincipalesFisicas.apellido}`,
                    cuit: `${values.datosFiscales.cuit}`,
                    email: `${values.mediocomunicacion[0].medio}`,
                }))
                if (response !== null) {
                    dispatch(toggleCompletedForm())
                    await router.push("/registerSuccess")
                }
            }catch (error) {
                console.error(error)
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
                    Registro de Persona Física {"(En construcción)"}
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
                                <Message
                                    type="info"
                                    title="Estimado Inversor:"
                                    message={`
                Bienvenido a ARG SECURITIES ADVISORS S.A. Agente de Negociación Matricula CNV Nro. 719
                Para iniciar el proceso de apertura de cuenta comitente deberá completar el siguiente formulario con la información de cada uno de los titulares. Una vez completada la información, deberá adjuntar la documentación solicitada en cada apartado.  
                Una vez recibida la información, nos pondremos en contacto con Ud. a la brevedad para finalizar el proceso de apertura.
                Muchas gracias!
                
                `}
                                />
                            </Grid>
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
                            <PersonasRelacionadas />
                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>

                            <Grid item md={8} />

                            <TermsAndConditionsContainer fmk={formik} />


                            <Grid item xs={12}>
                                <Divider sx={{ marginTop: 2 }} />
                            </Grid>
                            {/* <Grid item xs={12} md={3}>
                                <Button variant="contained" component="label">
                                    Cargar DNI Frente
                                    <input type="file" name='dniFrenteDorso' hidden onChange={(e) => {
                                        console.log(e.target.files[0])
                                        formik.setFieldValue('dniFrenteDorso', e.target.files[0])
                                    }} />
                                </Button>
                                <small>{formik.errors.dniFrenteDorso}.</small>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Button variant="contained" component="label">
                                    Cargar DNI Dorso
                                    <input type="file" name='constanciaOrigenDeFondos' hidden onChange={(e) => {
                                        formik.setFieldValue('constanciaOrigenDeFondos', e.target.files[0])
                                    }} />
                                </Button>
                                    <small>{formik.errors.constanciaOrigenDeFondos}.</small>
                            </Grid>
                            
                            <Grid item xs={12} md={6} /> */}
                            
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
    )
}
