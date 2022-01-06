import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import frLocale from "date-fns/locale/fr"
import React, { useState } from "react"

export const InformacionPatrimonial = () => {
    const [fecha, setFecha] = useState("")
    const [vencimiento, setVencimiento] = useState("")
    const [fondeo, setFondeo] = useState("")
    const [procedencia, setProcedencia] = useState("")
    const procedencias = ["Actividad principal", "Renta", "Otro"]
    const fondeos = [
        "Transferencia en pesos",
        "Transferencia en dólares",
        "Cheques propios",
        "Cheques de terceros",
        "Títulos",
    ]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Información patrimonial
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={frLocale}
                >
                    <DatePicker
                        label="Fecha"
                        value={fecha}
                        onChange={(newValue) => {
                            setFecha(newValue)
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
                        label="Vencimiento"
                        value={vencimiento}
                        onChange={(newValue) => {
                            setVencimiento(newValue)
                        }}
                        renderInput={(params) => (
                            <TextField {...params} fullWidth />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Patrimonio (ARS)"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Ingresos anuales (ARS)"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    label="Destinado a inversiones (%)"
                    variant="outlined"
                    type={"number"}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Procedencia de fondos"
                    value={procedencia}
                    onChange={(e) => setProcedencia(e.target.value)}
                    fullWidth
                    required
                >
                    {procedencias.map((option) => (
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
                    label="Observaciones"
                    variant="outlined"
                    disabled={procedencia !== 'Otro'}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography component="h6" variant="h6">
                    Medio de fondeo
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormGroup>
                    <Grid container spacing={2}>
                    {fondeos.map((f) => {
                        return (
                            <Grid item sm={4}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={f}
                                />

                            </Grid>
                        )
                    })}
                    </Grid>

                </FormGroup>
            </Grid>
        </>
    )
}
