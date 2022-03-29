import React from "react"
import {
    Alert,
    Box,
    Grid,
    IconButton,
    Typography,
} from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { DomicilioUrbano } from "./DomicilioUrbano/DomicilioUrbano"
import { FieldArray } from "formik"

export const DomiciliosUrbanos = ({ fmk }) => {
    return (
        <>
            <FieldArray
                name={"domicilioUrbano"}
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
                                        Domicilios Urbanos
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        onClick={() => arrayHelpers.push({
                                            uso: "Legal",
                                            barrio: "",
                                            calle: "",
                                            numero: 0,
                                            torre: "",
                                            piso: 0,
                                            departamento: "",
                                            lugar: "",
                                            codigoPostal: "",
                                            notas: "",
                                        })}
                                        color="primary"
                                        aria-label="delete"
                                    >
                                        <AddCircleIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        {typeof fmk.errors.domicilioUrbano === "string" && (
                            <Grid item xs={12}>
                                <Alert severity="error" variant="outlined">
                                    {fmk.errors.domicilioUrbano}
                                </Alert>
                            </Grid>
                        )}
                        {fmk.values.domicilioUrbano.map((dom, index) => {
                            return (<DomicilioUrbano index={index} fmk={fmk} arrayHelper={arrayHelpers} />)
                        })}
                    </>
                )}
            />
        </>
    )
}
