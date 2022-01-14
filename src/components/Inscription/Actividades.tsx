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
                                        Actividades
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        onClick={() => arrayHelpers.push({
                                            actividad: "",
                                            rubro: "",
                                            puesto: "",
                                            departamento: "",
                                            organizacion: "",
                                            inicio: "",
                                            fin: "",
                                            observaciones: "",
                                            codigoTipoActividad: "",
                                        })}
                                        color="primary"
                                        aria-label="delete"
                                    >
                                        <AddCircleIcon />
                                    </IconButton>
                                    
                                </Box>
                            </Box>
                        </Grid>
                        {typeof fmk.errors.actividadPersona === "string" && (
                            <Grid item xs={12}>
                                <Alert severity="error" variant="outlined">
                                    {fmk.errors.actividadPersona}
                                </Alert>
                            </Grid>
                        )}
                        {fmk.values.actividadPersona.map((dom, index) => {
                            return (<Actividad index={index} fmk={fmk} arrayHelper={arrayHelpers} />)
                        })}
                    </>
                )}
            />
        </>
    )
}
