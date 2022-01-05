import React, { useState } from "react"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker } from "@mui/lab"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"

export const DatosPersonales = () => {
    const [nacimiento, setNacimiento] = useState<Date | null>(null)
    const [sexo, setSexo] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")
    const sexList = ["Masculino", "Femenino"]
    const estadoCivilList = [
        "Soltero",
        "Casado",
        "Divorciado",
        "Separado",
        "Viudo",
        "Unión Convivencial",
    ]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos personales
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={frLocale}
                >
                    <DatePicker
                        label="Fecha de nacimiento"
                        value={nacimiento}
                        onChange={(newValue) => {
                            setNacimiento(newValue)
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
                    label="Sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    fullWidth
                    required
                >
                    {sexList.map((option) => (
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
                    label="Estado civil"
                    value={estadoCivil}
                    onChange={(e) => setEstadoCivil(e.target.value)}
                    fullWidth
                    required
                >
                    {estadoCivilList.map((option) => (
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
                    label="Idioma"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nacionalidad"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="País de residencia"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="País de origen"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar de nacimiento"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="CIE (AFIP RG 3986)"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Profesión o formación u oficio"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}
