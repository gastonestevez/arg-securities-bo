import { Box, Grid, IconButton, TextField, Typography } from "@mui/material"
import { FieldArray } from "formik"
import React, { useState } from "react"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { CuentaBancariaExterior } from "./CuentaBancariaExterior/CuentaBancariaExterior"

export const CuentasBancariasExterior = ({ fmk }) => {
    return (
        <>
            <FieldArray
                name={"cuentaBancariaExterior"}
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
                                        Cuentas bancarias del exterior
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        onClick={() =>
                                            arrayHelpers.push({
                                                cuenta: "",
                                                moneda: "",
                                                banco: "",
                                                denominacion: "",
                                                direccion: "",
                                                holderType: "Personal",
                                                accountType: "Savings",
                                                nroBancoABA: "",
                                                idSWIFT: "",
                                                notas: "",
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
                        {fmk.values.cuentaBancariaExterior.map((dom, index) => {
                            return (
                                <CuentaBancariaExterior
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
