import React, { useState } from 'react'
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker } from "@mui/lab"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"

export const DomiciliosUrbanos = () => {
    const [uso, setUso] = useState("")
    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")
    const tiposDeuso = ['Legal', 'Fiscal', 'Real']

    return (
        <>
        <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Domicilios urbanos
                </Typography>
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
                    {tiposDeuso.map((option) => (
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
                    label="Barrio"
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
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Calle"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Número"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Torre"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Piso"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Código postal"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    label="Notas"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}
