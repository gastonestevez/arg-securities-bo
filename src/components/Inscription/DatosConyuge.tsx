import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import frLocale from "date-fns/locale/fr"

export const DatosConyuge = () => {
    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")
    const [nationalId, setNationalId] = useState("")
    const [tipoDeClave, setTipoDeClave] = useState("")
    const tiposDeClavesFiscales = ["CUIL", "CUIT"]
    const nationalIds = ["DNI", "LC", "LE", "EXT", "PAS"]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos del cónyuge
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={frLocale}
                >
                    <DatePicker
                        label="Desde"
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
                        label="Hasta"
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
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de ID"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    fullWidth
                    required
                >
                    {nationalIds.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="ID" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de Clave Fiscal"
                    value={tipoDeClave}
                    onChange={(e) => setTipoDeClave(e.target.value)}
                    fullWidth
                >
                    {tiposDeClavesFiscales.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Clave fiscal" variant="outlined" />
            </Grid>
        </>
    )
}
