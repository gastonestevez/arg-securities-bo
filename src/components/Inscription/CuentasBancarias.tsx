import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"
import React, { useState } from "react"

export const CuentasBancarias = () => {
    const tipoIds = ["CBU", "CVU"]
    const tipoCuentas = [
        "Cuenta corriente",
        "Caja de ahorro",
        "Cuenta judicial",
        "Otros",
    ]
    const monedas = ["ARS", "EUR", "EURC", "USD", "USDC", "USDL"]
    const usos = ["Personal", "Comercial", "Débitos", "Créditos", "Otro"]
    const [tipoId, setTipoId] = useState("")
    const [tipoCuenta, setTipoCuenta] = useState("")
    const [moneda, setMoneda] = useState("")
    const [uso, setUso] = useState("")
    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Cuentas bancarias
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo ID"
                    value={tipoId}
                    onChange={(e) => setTipoId(e.target.value)}
                    fullWidth
                    required
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
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Alias CBU/CVU"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Banco y Sucursal"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de cuenta"
                    value={tipoCuenta}
                    onChange={(e) => setTipoCuenta(e.target.value)}
                    fullWidth
                    required
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
                    id="outlined-select-currency"
                    select
                    label="Moneda"
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                    fullWidth
                    required
                >
                    {monedas.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Número" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Uso"
                    value={uso}
                    onChange={(e) => setUso(e.target.value)}
                    fullWidth
                    required
                >
                    {usos.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Denominación"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={frLocale}
                    >
                        <DatePicker
                            label="Vigente desde"
                            value={desde}
                            onChange={(newValue) => {
                                setDesde(newValue)
                            }}
                            renderInput={(params) => (
                                <TextField {...params} fullWidth />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={frLocale}
                    >
                        <DatePicker
                            label="Vigente hasta"
                            value={hasta}
                            onChange={(newValue) => {
                                setHasta(newValue)
                            }}
                            renderInput={(params) => (
                                <TextField {...params} fullWidth />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Notas"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </>
    )
}
