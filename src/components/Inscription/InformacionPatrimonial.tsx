import {
    Alert,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import { FieldArray } from "formik"
import React, { useState } from "react"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { InfoPatrimonial } from "./InfoPatrimonial/InfoPatrimonial"
import Message from "../Message"

export const InformacionPatrimonial = ({ fmk }) => {
    return (
        <>
            <FieldArray
                name={"infoPatrimonial"}
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
                                        Información patrimonial
                                    </Typography>
                                </Box>

                                <Box>
                                    <IconButton
                                        onClick={() =>
                                            arrayHelpers.push({
                                                fecha: new Date().toISOString().substring(0, 10),
                                                patrimonio: 0,
                                                ingresos: 0,
                                                inversion: 0,
                                                procedenciaFondos: "",
                                                observaciones: "",
                                                fondeo: [],
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
                        {!!fmk.values.infoPatrimonial.length && (
                            <>
                                <Message
                                    type={"info"}
                                    title={"Estimado Inversor: "}
                                    message={`
                                En este apartado Ud. deberá explicar el origen o la fuente de los fondos que operará a través de la cuenta que está solicitando (Ej. Trabajo en relación, Recuerde que, según sea el caso, deberá acompañar con la documentación respaldatoria correspondiente. - DDJJ de Bienes Personales y/o Ganancias con su respectivo ticket de presentación, Certificación de ingresos emitida por Contador Público y legalizada por el Consejo Profesional de Ciencias Económicas.  
                                Otras fuentes de ingresos: En caso de que sus ingresos provengan de rentas, herencias, donaciones u otras fuentes, por favor desarrolle una breve descripción de estas en el campo “Información Adicional sobre Origen de los Fondos”. Ej. Fondos provenientes de una herencia o separación de bienes: indique a que se dedicaba la persona que le dejó el patrimonio, que bienes le dejó, etc. La documentación respaldatoria que deberá aportar es: acta, sentencia, declaratoria de herederos o testamento homologado por el juez. 
                                
                                `}
                                />
                            </>
                        )}
                        {typeof fmk.errors.infoPatrimonial === "string" && (
                            <Grid item xs={12}>
                                <Alert severity="error" variant="outlined">
                                    {fmk.errors.infoPatrimonial}
                                </Alert>
                            </Grid>
                        )}
                        {fmk.values.infoPatrimonial.map((dom, index) => {
                            return (
                                <InfoPatrimonial
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
