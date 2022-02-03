import {
    Alert,
    Box,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import { FieldArray } from "formik"
import React, { useState } from "react"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { CuentaBancaria } from "./CuentaBancaria/CuentaBancaria"

export const CuentasBancarias = ({ fmk }) => {
    return (
        <>
            <FieldArray
                name={"cuentaBancaria"}
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
                                        Cuentas bancarias
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        onClick={() =>
                                            arrayHelpers.push({
                                                cbu: "",
                                                alias: "",
                                                interbanking: true,
                                                tipo: "Caja de ahorro",
                                                moneda: "ARS",
                                                numero: "",
                                                denominacion: "",
                                                uso: "Personal",
                                                notas: "",
                                                tipoID: "",
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
                        {typeof fmk.errors.cuentaBancaria === "string" && (
                            <Grid item xs={12}>
                                <Alert severity="error" variant="outlined">
                                    {fmk.errors.cuentaBancaria}
                                </Alert>
                            </Grid>
                        )}
                        {fmk.values.cuentaBancaria.map((dom, index) => {
                            return (
                                <CuentaBancaria
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
