import React, { useState } from "react"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import { countries } from "../../form/countries"
import { languages } from "../../form/languages"
import { format } from "date-fns"

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
                <TextField
                    fullWidth
                    label={"Fecha de nacimiento"}
                    id={"datosPersonales.fechaNacimiento"}
                    name={"datosPersonales.fechaNacimiento"}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.datosPersonales?.fechaNacimiento}
                    error={
                        fmk.touched.datosPersonales?.fechaNacimiento &&
                        Boolean(fmk.errors.datosPersonales?.fechaNacimiento)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.fechaNacimiento &&
                        fmk.errors.datosPersonales?.fechaNacimiento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Sexo"
                    fullWidth
                    required
                    id={"datosPersonales.sexo"}
                    name={"datosPersonales.sexo"}
                    value={fmk.values.datosPersonales?.sexo}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.sexo &&
                        Boolean(fmk.errors.datosPersonales?.sexo)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.sexo &&
                        fmk.errors.datosPersonales?.sexo
                    }
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
                    select
                    label="Estado civil"
                    fullWidth
                    required
                    id="datosPersonales.estadoCivil"
                    name="datosPersonales.estadoCivil"
                    value={fmk.values.datosPersonales?.estadoCivil}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.estadoCivil &&
                        Boolean(fmk.errors.datosPersonales?.estadoCivil)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.estadoCivil &&
                        fmk.errors.datosPersonales?.estadoCivil
                    }
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
                    select
                    required
                    fullWidth
                    label="Idioma"
                    variant="outlined"
                    id="datosPersonales.idimoa"
                    name="datosPersonales.idioma"
                    value={fmk.values.datosPersonales?.idioma}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.idioma &&
                        Boolean(fmk.errors.datosPersonales?.idioma)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.idioma &&
                        fmk.errors.datosPersonales?.idioma
                    }
                >
                    {languages.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    required
                    fullWidth
                    label="Nacionalidad"
                    variant="outlined"
                    id="datosPersonales.nacionalidad"
                    name="datosPersonales.nacionalidad"
                    value={fmk.values.datosPersonales?.nacionalidad}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.nacionalidad &&
                        Boolean(fmk.errors.datosPersonales?.nacionalidad)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.nacionalidad &&
                        fmk.errors.datosPersonales?.nacionalidad
                    }
                >
                    {countries.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    required
                    fullWidth
                    label="País de residencia"
                    variant="outlined"
                    id="datosPersonales.paisResidencia"
                    name="datosPersonales.paisResidencia"
                    value={fmk.values.datosPersonales?.paisResidencia}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.paisResidencia &&
                        Boolean(fmk.errors.datosPersonales?.paisResidencia)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.paisResidencia &&
                        fmk.errors.datosPersonales?.paisResidencia
                    }
                >
                    {countries.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    fullWidth
                    label="País de origen"
                    variant="outlined"
                    id="datosPersonales.paisOrigen"
                    name="datosPersonales.paisOrigen"
                    value={fmk.values.datosPersonales?.paisOrigen}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.paisOrigen &&
                        Boolean(fmk.errors.datosPersonales?.paisOrigen)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.paisOrigen &&
                        fmk.errors.datosPersonales?.paisOrigen
                    }
                >
                    {countries.map((option) => (
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
                    label="Lugar de nacimiento"
                    variant="outlined"
                    id="datosPersonales.lugarNacimiento"
                    name="datosPersonales.lugarNacimiento"
                    value={fmk.values.datosPersonales?.lugarNacimiento}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.lugarNacimiento &&
                        Boolean(fmk.errors.datosPersonales?.lugarNacimiento)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.lugarNacimiento &&
                        fmk.errors.datosPersonales?.lugarNacimiento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="CIE (AFIP RG 3986)"
                    variant="outlined"
                    id="datosPersonales.cie"
                    name="datosPersonales.cie"
                    value={fmk.values.datosPersonales?.cie}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.cie &&
                        Boolean(fmk.errors.datosPersonales?.cie)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.cie &&
                        fmk.errors.datosPersonales?.cie
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Profesión o formación u oficio"
                    variant="outlined"
                    id="datosPersonales.actividad"
                    name="datosPersonales.actividad"
                    value={fmk.values.datosPersonales?.actividad}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosPersonales?.actividad &&
                        Boolean(fmk.errors.datosPersonales?.actividad)
                    }
                    helperText={
                        fmk.touched.datosPersonales?.actividad &&
                        fmk.errors.datosPersonales?.actividad
                    }
                />
            </Grid>
        </>
    )
}
