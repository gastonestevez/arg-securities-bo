import React, { useState } from "react"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"

export const MediosDeComunicacion = ({ fmk }) => {
    const tiposDeMedios = [
        "Movil",
        "E-Mail",
        "Fax",
        "Conexión directa",
        "Teléfono",
        "Facebook",
        "Linkedin",
        "Google+",
    ]
    const tiposDeuso = ["Personal", "Laboral", "Comercial", "Otro"]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Medios de comunicación
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de medio"
                    fullWidth
                    required
                    id="medioComunicacion.tipo"
                    name="medioComunicacion.tipo"
                    value={fmk.values.medioComunicacion?.tipo}
                    onChange={fmk.handleChange}
                    error={fmk.touched.medioComunicacion?.tipo && Boolean(fmk.errors.medioComunicacion?.tipo)}
                    helperText={fmk.touched.medioComunicacion?.tipo && fmk.errors.medioComunicacion?.tipo}
                >
                    {tiposDeMedios.map((option) => (
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
                    label="Medio"
                    variant="outlined"
                    id="medioComunicacion.medio"
                    name="medioComunicacion.medio"
                    value={fmk.values.medioComunicacion?.medio}
                    onChange={fmk.handleChange}
                    error={fmk.touched.medioComunicacion?.medio && Boolean(fmk.errors.medioComunicacion?.medio)}
                    helperText={fmk.touched.medioComunicacion?.medio && fmk.errors.medioComunicacion?.tipo}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id="medioComunicacion.uso"
                    name="medioComunicacion.uso"
                    value={fmk.values.medioComunicacion?.uso}
                    onChange={fmk.handleChange}
                    error={fmk.touched.medioComunicacion?.uso && Boolean(fmk.errors.medioComunicacion?.uso)}
                    helperText={fmk.touched.medioComunicacion?.uso && fmk.errors.medioComunicacion?.uso}
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
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id="medioComunicacion.notas"
                    name="medioComunicacion.notas"
                    value={fmk.values.medioComunicacion?.notas}
                    onChange={fmk.handleChange}
                    error={fmk.touched.medioComunicacion?.notas && Boolean(fmk.errors.medioComunicacion?.notas)}
                    helperText={fmk.touched.medioComunicacion?.notas && fmk.errors.medioComunicacion?.notas}
                />
            </Grid>
        </>
    )
}
