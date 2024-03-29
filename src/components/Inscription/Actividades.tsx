import {
    Alert,
    Box,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material"
import { FieldArray } from "formik"
import React from "react"
import { DomicilioUrbano } from "./DomicilioUrbano/DomicilioUrbano"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Actividad } from "./Actividad/Actividad"
import Message from "../Message"

export const Actividades = ({ fmk }) => {
    return (
        <>
            <FieldArray
                name={"actividadPersona"}
                render={(arrayHelpers) => (
                    <>
                        <Grid item xs={12} sm={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <Typography component="h5" variant="h5">
                                        Actividades económicas
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        disabled={
                                            fmk.values.actividadPersona
                                                .length === 2
                                        }
                                        onClick={() =>
                                            arrayHelpers.push({
                                                actividad: "",
                                                rubro: "",
                                                puesto: "",
                                                departamento: "",
                                                organizacion: "",
                                                // inicio: "",
                                                // fin: "",
                                                observaciones: "",
                                                // codigoTipoActividad: "",
                                            })
                                        }
                                        color="primary"
                                        aria-label="delete"
                                    >
                                        <AddCircleIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        {!!(fmk.values.actividadPersona.length > 0) && (
                            <Grid item xs={12}>
                                <Message
                                    type={"info"}
                                    title={"Estimado inversor:"}
                                    message={
                                        "Si adicionalmente a su actividad principal, realiza alguna otra actividad que le genere ingresos, por favor agregue la “Actividad Secundaria” y descríbala brevemente."
                                    }
                                />
                            </Grid>
                        )}
                        {typeof fmk.errors.actividadPersona === "string" && (
                            <Grid item xs={12}>
                                <Alert severity="error" variant="outlined">
                                    {fmk.errors.actividadPersona}
                                </Alert>
                            </Grid>
                        )}
                        {fmk.values.actividadPersona.map((dom, index) => {
                            return (
                                <Actividad
                                    index={index}
                                    fmk={fmk}
                                    arrayHelper={arrayHelpers}
                                />
                            )
                        })}
                    </>
                )}
            />
        </>
    )
}
