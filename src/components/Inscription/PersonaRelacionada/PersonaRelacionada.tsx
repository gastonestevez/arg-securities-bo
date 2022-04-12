import { Grid, Box, Typography, IconButton, Button } from "@mui/material"
import React, { useEffect } from "react"
import { Actividades } from "../Actividades"
import { CuentasBancarias } from "../CuentasBancarias"
import { DatosFiscalesNacionales } from "../DatosFiscalesNacionales"
import { DatosPersonales } from "../DatosPersonales"
import { DatosPrincipales } from "../DatosPrincipales"
import { Declaraciones } from "../Declaraciones"
import { DomiciliosUrbanos } from "../DomiciliosUrbanos"
import { InformacionPatrimonial } from "../InformacionPatrimonial"
import { MediosDeComunicacion } from "../MediosDeComunicacion"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import { FormikProvider, useFormik } from "formik"
import { personaRelacionadaInitialValues } from "../../../form/initialValues"
import { personaRelacionadaValidationSchema } from "../../../validations/validations"
const PersonaRelacionada = ({ index, onClickRemove, onChange }) => {
    const formik = useFormik({
        initialValues: personaRelacionadaInitialValues,
        validationSchema: personaRelacionadaValidationSchema,
        onSubmit: async (values) => {
            console.info(values)
        },
        validate: (values) => {
            onChange(values, index)
        }
        
    })

    return (
        <>
            <FormikProvider value={formik}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography component="p">
                            Titular {`${index + 1}`}
                        </Typography>
                        <IconButton
                            onClick={() => onClickRemove(index)}
                            color="secondary"
                            aria-label="delete"
                        >
                            <RemoveCircleIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <DatosPrincipales fmk={formik} />
                <DatosFiscalesNacionales fmk={formik} />
                <DatosPersonales fmk={formik} />
                <MediosDeComunicacion fmk={formik} />
                <DomiciliosUrbanos fmk={formik} />
                <CuentasBancarias fmk={formik} />
                <InformacionPatrimonial fmk={formik} />
                <Actividades fmk={formik} />
                <Declaraciones fmk={formik} />
                {/* <Grid item xs={12}>
                    <Button variant="contained">Agregar titular</Button>
                </Grid> */}
            </FormikProvider>
        </>
    )
}

export default PersonaRelacionada
