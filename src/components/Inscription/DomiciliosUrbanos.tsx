import React, { useState } from 'react'
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker } from "@mui/lab"
import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import frLocale from "date-fns/locale/fr"

export const DomiciliosUrbanos = ({ fmk }) => {
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
                    select
                    label="Uso"
                    fullWidth
                    required
                    id={"domiciliosUrbanos.uso"}
                    name={"domiciliosUrbanos.uso"}
                    value={fmk.values.domiciliosUrbanos?.uso}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.uso && Boolean(fmk.errors.domiciliosUrbanos?.uso)}
                    helperText={fmk.touched.domiciliosUrbanos?.uso && fmk.errors.domiciliosUrbanos?.uso}
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
                    label="Barrio"
                    variant="outlined"
                    id={"domiciliosUrbanos.barrio"}
                    name={"domiciliosUrbanos.barrio"}
                    value={fmk.values.domiciliosUrbanos?.barrio}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.barrio && Boolean(fmk.errors.domiciliosUrbanos?.barrio)}
                    helperText={fmk.touched.domiciliosUrbanos?.barrio && fmk.errors.domiciliosUrbanos?.barrio}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Calle"
                    variant="outlined"
                    id={"domiciliosUrbanos.calle"}
                    name={"domiciliosUrbanos.calle"}
                    value={fmk.values.domiciliosUrbanos?.calle}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.calle && Boolean(fmk.errors.domiciliosUrbanos?.calle)}
                    helperText={fmk.touched.domiciliosUrbanos?.calle && fmk.errors.domiciliosUrbanos?.calle}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Número"
                    variant="outlined"
                    type={'number'}
                    id={"domiciliosUrbanos.numero"}
                    name={"domiciliosUrbanos.numero"}
                    value={fmk.values.domiciliosUrbanos?.numero}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.numero && Boolean(fmk.errors.domiciliosUrbanos?.numero)}
                    helperText={fmk.touched.domiciliosUrbanos?.numero && fmk.errors.domiciliosUrbanos?.numero}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Torre"
                    variant="outlined"
                    id={"domiciliosUrbanos.torre"}
                    name={"domiciliosUrbanos.torre"}
                    value={fmk.values.domiciliosUrbanos?.torre}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.torre && Boolean(fmk.errors.domiciliosUrbanos?.torre)}
                    helperText={fmk.touched.domiciliosUrbanos?.torre && fmk.errors.domiciliosUrbanos?.torre}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Piso"
                    variant="outlined"
                    type={'number'}
                    id={"domiciliosUrbanos.piso"}
                    name={"domiciliosUrbanos.piso"}
                    value={fmk.values.domiciliosUrbanos?.piso}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.piso && Boolean(fmk.errors.domiciliosUrbanos?.piso)}
                    helperText={fmk.touched.domiciliosUrbanos?.piso && fmk.errors.domiciliosUrbanos?.piso}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                    id={"domiciliosUrbanos.departamento"}
                    name={"domiciliosUrbanos.departamento"}
                    value={fmk.values.domiciliosUrbanos?.departamento}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.departamento && Boolean(fmk.errors.domiciliosUrbanos?.departamento)}
                    helperText={fmk.touched.domiciliosUrbanos?.departamento && fmk.errors.domiciliosUrbanos?.departamento}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar"
                    variant="outlined"
                    id={"domiciliosUrbanos.lugar"}
                    name={"domiciliosUrbanos.lugar"}
                    value={fmk.values.domiciliosUrbanos?.lugar}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.lugar && Boolean(fmk.errors.domiciliosUrbanos?.lugar)}
                    helperText={fmk.touched.domiciliosUrbanos?.lugar && fmk.errors.domiciliosUrbanos?.lugar}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Código postal"
                    variant="outlined"
                    id={"domiciliosUrbanos.codigoPostal"}
                    name={"domiciliosUrbanos.codigoPostal"}
                    value={fmk.values.domiciliosUrbanos?.codigoPostal}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.codigoPostal && Boolean(fmk.errors.domiciliosUrbanos?.codigoPostal)}
                    helperText={fmk.touched.domiciliosUrbanos?.codigoPostal && fmk.errors.domiciliosUrbanos?.codigoPostal}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id={"domiciliosUrbanos.notas"}
                    name={"domiciliosUrbanos.notas"}
                    value={fmk.values.domiciliosUrbanos?.notas}
                    onChange={fmk.handleChange}
                    error={fmk.touched.domiciliosUrbanos?.notas && Boolean(fmk.errors.domiciliosUrbanos?.notas)}
                    helperText={fmk.touched.domiciliosUrbanos?.notas && fmk.errors.domiciliosUrbanos?.notas}
                />
            </Grid>
        </>
    )
}
