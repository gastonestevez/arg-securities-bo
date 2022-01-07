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
        datosPrincipalesFisicas: yup.object().shape({
            nombre: yup.string().required("Este campo es requerido."),
            apellido: yup.string().required("Este campo es requerido."),
            tipoID: yup.string().required("Este campo es requerido."),
            id: yup.string().required("Este campo es requerido."),
        }),
        datosFiscales: yup.object().shape({
            tipoCodigo: yup.string().required("Este campo es requerido."),
            cuit: yup.string().required("Este campo es requerido."),
            tipoResponsableIVA: yup
                .string()
                .required("Este campo es requerido."),
            tipoResponsableGanancias: yup
                .string()
                .required("Este campo es requerido."),
        }),
        datosPersonales: yup.object().shape({
            fechaNacimiento: yup.date().required("Este campo es requerido."),
            sexo: yup.string().required("Este campo es requerido."),
            estadoCivil: yup.string().required("Este campo es requerido."),
            idioma: yup.string().required("Este campo es requerido."),
            nacionalidad: yup.string().required("Este campo es requerido."),
            paisResidencia: yup.string().required("Este campo es requerido."),
            paisOrigen: yup.string().notRequired(),
            lugarNacimiento: yup.string().required("Este campo es requerido."),
            cie: yup.string().notRequired(),
            actividad: yup.string().required("Este campo es requerido."),
        }),
        medioComunicacion: yup.object().shape({
            tipo: yup.string().required("Este campo es requerido."),
            medio: yup.string().required("Este campo es requerido."),
            uso: yup.string().required("Este campo es requerido."),
            notas: yup.string().notRequired()
        })
    })
    const initialValues = {
        datosPrincipalesFisicas: {
            nombre: "",
            apellido: "",
            tipoID: "",
            id: "",
        },
        datosFiscales: {
            tipoCodigo: "",
            cuit: "",
            tipoResponsableIVA: "",
            tipoResponsableGanancias: "",
        },
        datosPersonales: {
            fechaNacimiento: "",
            sexo: "",
            estadoCivil: "",
            idioma: "",
            nacionalidad: "",
            paisResidencia: "",
            paisOrigen: "",
            lugarNacimiento: "",
            cie: "",
            actividad: "",
        },
        medioComunicacion: {
            tipo: '',
            medio: '',
            uso: '',
            notas: ''
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
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
                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 4 }}
                >
                    <Grid container spacing={2}>
                        <DatosPrincipales fmk={formik} />
                        <DatosFiscalesNacionales fmk={formik} />
                        <DatosPersonales fmk={formik} />
                        <MediosDeComunicacion fmk={formik} />
                        {/* <DomiciliosUrbanos /> */}
                        {/* <CuentasBancarias /> */}
                        {/* <CuentasBancariasExterior /> */}
                        {/* <DatosConyuge /> */}
                        {/* <InformacionPatrimonial /> */}
                        {/* <Actividades /> */}
                        {/* <Declaraciones /> */}
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
