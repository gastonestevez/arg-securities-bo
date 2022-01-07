import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

export const CuentasBancarias = ({ fmk }) => {
    const tipoIds = ["CBU", "CVU"]
    const tipoCuentas = [
        "Cuenta corriente",
        "Caja de ahorro",
        "Cuenta judicial",
        "Otros",
    ]
    const monedas = ["ARS", "EUR", "EURC", "USD", "USDC", "USDL"]
    const usos = ["Personal", "Comercial", "Débitos", "Créditos", "Otro"]


    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Cuentas bancarias
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo ID"
                    fullWidth
                    required
                    id={"cuentaBancaria.tipoID"}
                    name={"cuentaBancaria.tipoID"}
                    value={fmk.values.cuentaBancaria?.tipoID}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.tipoID &&
                        Boolean(fmk.errors.cuentaBancaria?.tipoID)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.tipoID &&
                        fmk.errors.cuentaBancaria?.tipoID
                    }
                >
                    {tipoIds.map((option) => (
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
                    label="CBU/CVU"
                    variant="outlined"
                    id={"cuentaBancaria.cbu"}
                    name={"cuentaBancaria.cbu"}
                    value={fmk.values.cuentaBancaria?.cbu}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.cbu &&
                        Boolean(fmk.errors.cuentaBancaria?.cbu)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.cbu &&
                        fmk.errors.cuentaBancaria?.cbu
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Alias CBU/CVU"
                    variant="outlined"
                    id={"cuentaBancaria.alias"}
                    name={"cuentaBancaria.alias"}
                    value={fmk.values.cuentaBancaria?.alias}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.alias &&
                        Boolean(fmk.errors.cuentaBancaria?.alias)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.alias &&
                        fmk.errors.cuentaBancaria?.alias
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de cuenta"
                    fullWidth
                    required
                    id={"cuentaBancaria.tipo"}
                    name={"cuentaBancaria.tipo"}
                    value={fmk.values.cuentaBancaria?.tipo}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.tipo &&
                        Boolean(fmk.errors.cuentaBancaria?.tipo)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.tipo &&
                        fmk.errors.cuentaBancaria?.tipo
                    }
                >
                    {tipoCuentas.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Moneda"
                    fullWidth
                    required
                    id={"cuentaBancaria.moneda"}
                    name={"cuentaBancaria.moneda"}
                    value={fmk.values.cuentaBancaria?.moneda}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.moneda &&
                        Boolean(fmk.errors.cuentaBancaria?.moneda)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.moneda &&
                        fmk.errors.cuentaBancaria?.moneda
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
                    fullWidth
                    label="Número"
                    variant="outlined"
                    id={"cuentaBancaria.numero"}
                    name={"cuentaBancaria.numero"}
                    value={fmk.values.cuentaBancaria?.numero}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.numero &&
                        Boolean(fmk.errors.cuentaBancaria?.numero)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.numero &&
                        fmk.errors.cuentaBancaria?.numero
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id={"cuentaBancaria.uso"}
                    name={"cuentaBancaria.uso"}
                    value={fmk.values.cuentaBancaria?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.uso &&
                        Boolean(fmk.errors.cuentaBancaria?.uso)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.uso &&
                        fmk.errors.cuentaBancaria?.uso
                    }
                >
                    {usos.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Denominación"
                    variant="outlined"
                    id={"cuentaBancaria.denominacion"}
                    name={"cuentaBancaria.denominacion"}
                    value={fmk.values.cuentaBancaria?.denominacion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.denominacion &&
                        Boolean(fmk.errors.cuentaBancaria?.denominacion)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.denominacion &&
                        fmk.errors.cuentaBancaria?.denominacion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id={"cuentaBancaria.notas"}
                    name={"cuentaBancaria.notas"}
                    value={fmk.values.cuentaBancaria?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria?.notas &&
                        Boolean(fmk.errors.cuentaBancaria?.notas)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria?.notas &&
                        fmk.errors.cuentaBancaria?.notas
                    }
                />
            </Grid>
        </>
    )
}
