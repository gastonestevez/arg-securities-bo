import React, { useState } from "react"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker } from "@mui/lab"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"

export const DatosPersonales = ({ fmk }) => {
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
                        value={fmk.values.datosPersonales?.fechaNacimiento}
                        onChange={fmk.handleChange}
                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                fullWidth 
                                error={fmk.touched.datosPersonales?.fechaNacimiento && Boolean(fmk.errors.datosPersonales?.fechaNacimiento)}
                                helperText={fmk.touched.datosPersonales?.fechaNacimiento && fmk.errors.datosPersonales?.fechaNacimiento}
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Sexo"
                    fullWidth
                    required
                    value={fmk.values.datosPrincipales?.sexo}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.sexo && Boolean(fmk.errors.datosPrincipales?.sexo)}
                    helperText={fmk.touched.datosPrincipales?.sexo && fmk.errors.datosPrincipales?.sexo}
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
                    fullWidth
                    required
                    value={fmk.values.datosPrincipales?.estadoCivil}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.estadoCivil && Boolean(fmk.errors.datosPrincipales?.estadoCivil)}
                    helperText={fmk.touched.datosPrincipales?.estadoCivil && fmk.errors.datosPrincipales?.estadoCivil}
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
                    value={fmk.values.datosPrincipales?.idioma}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.idioma && Boolean(fmk.errors.datosPrincipales?.idioma)}
                    helperText={fmk.touched.datosPrincipales?.idioma && fmk.errors.datosPrincipales?.idioma}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nacionalidad"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.nacionalidad}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.nacionalidad && Boolean(fmk.errors.datosPrincipales?.nacionalidad)}
                    helperText={fmk.touched.datosPrincipales?.nacionalidad && fmk.errors.datosPrincipales?.nacionalidad}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="País de residencia"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.paisResidencia}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.paisResidencia && Boolean(fmk.errors.datosPrincipales?.paisResidencia)}
                    helperText={fmk.touched.datosPrincipales?.paisResidencia && fmk.errors.datosPrincipales?.paisResidencia}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="País de origen"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.paisOrigen}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.paisOrigen && Boolean(fmk.errors.datosPrincipales?.paisOrigen)}
                    helperText={fmk.touched.datosPrincipales?.paisOrigen && fmk.errors.datosPrincipales?.paisOrigen}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar de nacimiento"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.lugarNacimiento}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.lugarNacimiento && Boolean(fmk.errors.datosPrincipales?.lugarNacimiento)}
                    helperText={fmk.touched.datosPrincipales?.lugarNacimiento && fmk.errors.datosPrincipales?.lugarNacimiento}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="CIE (AFIP RG 3986)"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.cie}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.cie && Boolean(fmk.errors.datosPrincipales?.cie)}
                    helperText={fmk.touched.datosPrincipales?.cie && fmk.errors.datosPrincipales?.cie}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Profesión o formación u oficio"
                    variant="outlined"
                    value={fmk.values.datosPrincipales?.actividad}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipales?.actividad && Boolean(fmk.errors.datosPrincipales?.actividad)}
                    helperText={fmk.touched.datosPrincipales?.actividad && fmk.errors.datosPrincipales?.actividad}
                />
            </Grid>
        </>
    )
}
