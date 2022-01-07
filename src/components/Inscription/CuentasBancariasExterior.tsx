import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"
import React, { useState } from "react"

export const CuentasBancariasExterior = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Cuentas bancarias del exterior
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Cuenta (Account)"
                    variant="outlined"
                    id={"cuentaBancariaExterior.cuenta"}
                    name={"cuentaBancariaExterior.cuenta"}
                    value={fmk.values.cuentaBancariaExterior?.cuenta}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.cuenta && Boolean(fmk.errors.cuentaBancariaExterior?.cuenta)}
                    helperText={fmk.touched.cuentaBancariaExterior?.cuenta && fmk.errors.cuentaBancariaExterior?.cuenta}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Moneda"
                    variant="outlined"
                    id={"cuentaBancariaExterior.moneda"}
                    name={"cuentaBancariaExterior.moneda"}
                    value={fmk.values.cuentaBancariaExterior?.moneda}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.moneda && Boolean(fmk.errors.cuentaBancariaExterior?.moneda)}
                    helperText={fmk.touched.cuentaBancariaExterior?.moneda && fmk.errors.cuentaBancariaExterior?.moneda}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Banco (Bank)"
                    variant="outlined"
                    id={"cuentaBancariaExterior.banco"}
                    name={"cuentaBancariaExterior.banco"}
                    value={fmk.values.cuentaBancariaExterior?.banco}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.banco && Boolean(fmk.errors.cuentaBancariaExterior?.banco)}
                    helperText={fmk.touched.cuentaBancariaExterior?.banco && fmk.errors.cuentaBancariaExterior?.banco}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Denominación (Beneficiary name)"
                    variant="outlined"
                    id={"cuentaBancariaExterior.denominacion"}
                    name={"cuentaBancariaExterior.denominacion"}
                    value={fmk.values.cuentaBancariaExterior?.denominacion}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.denominacion && Boolean(fmk.errors.cuentaBancariaExterior?.denominacion)}
                    helperText={fmk.touched.cuentaBancariaExterior?.denominacion && fmk.errors.cuentaBancariaExterior?.denominacion}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Dirección (Address)"
                    variant="outlined"
                    id={"cuentaBancariaExterior.direccion"}
                    name={"cuentaBancariaExterior.direccion"}
                    value={fmk.values.cuentaBancariaExterior?.direccion}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.direccion && Boolean(fmk.errors.cuentaBancariaExterior?.direccion)}
                    helperText={fmk.touched.cuentaBancariaExterior?.direccion && fmk.errors.cuentaBancariaExterior?.direccion}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Número de banco ABA"
                    variant="outlined"
                    id={"cuentaBancariaExterior.nroBancoABA"}
                    name={"cuentaBancariaExterior.nroBancoABA"}
                    value={fmk.values.cuentaBancariaExterior?.nroBancoABA}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.nroBancoABA && Boolean(fmk.errors.cuentaBancariaExterior?.nroBancoABA)}
                    helperText={fmk.touched.cuentaBancariaExterior?.nroBancoABA && fmk.errors.cuentaBancariaExterior?.nroBancoABA}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="SWIFT"
                    variant="outlined"
                    id={"cuentaBancariaExterior.idSWIFT"}
                    name={"cuentaBancariaExterior.idSWIFT"}
                    value={fmk.values.cuentaBancariaExterior?.idSWIFT}
                    onChange={fmk.handleChange}
                    error={fmk.touched.cuentaBancariaExterior?.idSWIFT && Boolean(fmk.errors.cuentaBancariaExterior?.idSWIFT)}
                    helperText={fmk.touched.cuentaBancariaExterior?.idSWIFT && fmk.errors.cuentaBancariaExterior?.idSWIFT}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}
