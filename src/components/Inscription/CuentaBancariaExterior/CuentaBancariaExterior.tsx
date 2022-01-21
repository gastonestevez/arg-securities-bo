import { Box, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import React from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export const CuentaBancariaExterior = ({ index, fmk, arrayHelper }) => {
    const monedas = ["ARS", "EUR", "EURC", "USD", "USDC", "USDL"]
    const holderTypes = ["Personal", "Business"]
    const accountTypes = ["Checking", "Savings"]

    return (
        <>
            <Grid item xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography component="p">
                        Cuenta Bancaria {`${index + 1}`}
                    </Typography>
                    <IconButton
                        onClick={() => arrayHelper.remove(index)}
                        color="secondary"
                        aria-label="delete"
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Cuenta (Account)"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].cuenta`}
                    name={`cuentaBancariaExterior[${index}].cuenta`}
                    value={fmk.values.cuentaBancariaExterior?.cuenta}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.cuenta &&
                        Boolean(fmk.errors.cuentaBancariaExterior?.cuenta)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.cuenta &&
                        fmk.errors.cuentaBancariaExterior[index]?.cuenta
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    required
                    fullWidth
                    label="Moneda"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].moneda`}
                    name={`cuentaBancariaExterior[${index}].moneda`}
                    value={fmk.values.cuentaBancariaExterior?.moneda}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.moneda &&
                        Boolean(
                            fmk.errors.cuentaBancariaExterior[index]?.moneda
                        )
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.moneda &&
                        fmk.errors.cuentaBancariaExterior[index]?.moneda
                    }
                >
                    {monedas.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Banco (Bank)"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].banco`}
                    name={`cuentaBancariaExterior[${index}].banco`}
                    value={fmk.values.cuentaBancariaExterior?.banco}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.banco &&
                        Boolean(fmk.errors.cuentaBancariaExterior[index]?.banco)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.banco &&
                        fmk.errors.cuentaBancariaExterior[index]?.banco
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Denominación (Beneficiary name)"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].denominacion`}
                    name={`cuentaBancariaExterior[${index}].denominacion`}
                    value={fmk.values.cuentaBancariaExterior?.denominacion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]
                            ?.denominacion &&
                        Boolean(
                            fmk.errors.cuentaBancariaExterior[index]
                                ?.denominacion
                        )
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]
                            ?.denominacion &&
                        fmk.errors.cuentaBancariaExterior[index]?.denominacion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Dirección (Address)"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].direccion`}
                    name={`cuentaBancariaExterior[${index}].direccion`}
                    value={fmk.values.cuentaBancariaExterior?.direccion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.direccion &&
                        Boolean(
                            fmk.errors.cuentaBancariaExterior[index]?.direccion
                        )
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.direccion &&
                        fmk.errors.cuentaBancariaExterior[index]?.direccion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Número de banco ABA"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].nroBancoABA`}
                    name={`cuentaBancariaExterior[${index}].nroBancoABA`}
                    value={fmk.values.cuentaBancariaExterior?.nroBancoABA}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]
                            ?.nroBancoABA &&
                        Boolean(
                            fmk.errors.cuentaBancariaExterior[index]
                                ?.nroBancoABA
                        )
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]
                            ?.nroBancoABA &&
                        fmk.errors.cuentaBancariaExterior[index]?.nroBancoABA
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="SWIFT"
                    variant="outlined"
                    id={`cuentaBancariaExterior.[${index}].idSWIFT`}
                    name={`cuentaBancariaExterior[${index}].idSWIFT`}
                    value={fmk.values.cuentaBancariaExterior?.idSWIFT}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.idSWIFT &&
                        Boolean(
                            fmk.errors.cuentaBancariaExterior[index]?.idSWIFT
                        )
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.cuentaBancariaExterior[index]?.idSWIFT &&
                        fmk.errors.cuentaBancariaExterior[index]?.idSWIFT
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Notas" variant="outlined" />
            </Grid>
        </>
    )
}
