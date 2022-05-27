import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Grid, Typography } from "@mui/material"

export const Registro = ({ fmk }) => {
    const tiposInscripcion = ["IGJ", "DPPJ", "RPC"]
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Registro
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.tipo"
                    name="registro.tipo"
                    select
                    defaultValue={''}
                    label="Lugar de inscripción"
                    value={fmk.values.registro?.tipo}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.tipo && Boolean(fmk.errors.registro?.tipo)}
                    helperText={fmk.touched.registro?.tipo && fmk.errors.registro?.tipo}
                    fullWidth
                    required
                    
                >
                    {tiposInscripcion.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.numero"
                    name="registro.numero"
                    required
                    fullWidth
                    label="Número"
                    variant="outlined"
                    value={fmk.values.registro?.numero}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.numero && Boolean(fmk.errors.registro?.numero)}
                    helperText={fmk.touched.registro?.numero && fmk.errors.registro?.numero}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.lugar"
                    name="registro.lugar"
                    required
                    fullWidth
                    label="Lugar"
                    variant="outlined"
                    value={fmk.values.registro?.lugar}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.lugar && Boolean(fmk.errors.registro?.lugar)}
                    helperText={fmk.touched.registro?.lugar && fmk.errors.registro?.lugar}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label={"Fecha"}
                    id={`registro.fecha`}
                    name={`registro.fecha`}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.registro?.fecha}
                    error={
                        fmk.touched.registro &&
                        fmk.touched.registro?.fecha &&
                        fmk.errors.registro &&
                        Boolean(fmk.errors.registro?.fecha)
                    }
                    helperText={
                        fmk.touched.registro &&
                        fmk.touched.registro?.fecha &&
                        fmk.errors.registro &&
                        fmk.errors.registro?.fecha
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.folio"
                    name="registro.folio"
                    // required
                    fullWidth
                    label="Folio"
                    variant="outlined"
                    value={fmk.values.registro?.folio}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.folio && Boolean(fmk.errors.registro?.folio)}
                    helperText={fmk.touched.registro?.folio && fmk.errors.registro?.folio}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.libro"
                    name="registro.libro"
                    // required
                    fullWidth
                    label="Libro"
                    variant="outlined"
                    value={fmk.values.registro?.libro}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.libro && Boolean(fmk.errors.registro?.libro)}
                    helperText={fmk.touched.registro?.libro && fmk.errors.registro?.libro}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="registro.tomo"
                    name="registro.tomo"
                    // required
                    fullWidth
                    label="Tomo"
                    variant="outlined"
                    value={fmk.values.registro?.tomo}
                    onChange={fmk.handleChange}
                    error={fmk.touched.registro?.tomo && Boolean(fmk.errors.registro?.tomo)}
                    helperText={fmk.touched.registro?.tomo && fmk.errors.registro?.tomo}
                />
            </Grid>
            
        </>
    )
}
