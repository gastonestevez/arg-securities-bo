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
                                                fecha: "",
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
