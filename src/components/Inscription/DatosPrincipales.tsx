import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid, Typography } from "@mui/material"

export const DatosPrincipales = ({ fmk }) => {
    const nationalIds = ["DNI", "LC", "LE", "EXT", "PAS"]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos principales
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesFisicas.nombre"
                    name="datosPrincipalesFisicas.nombre"
                    required
                    fullWidth
                    label="Nombres"
                    variant="outlined"
                    value={fmk.values.nombre}
                    onChange={fmk.handleChange}
                    error={fmk.touched.nombre && Boolean(fmk.errors.nombre)}
                    helperText={fmk.touched.nombre && fmk.errors.nombre}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesFisicas.apellido"
                    name="datosPrincipalesFisicas.apellido"
                    required
                    fullWidth
                    label="Apellidos"
                    variant="outlined"
                    value={fmk.values.apellido}
                    onChange={fmk.handleChange}
                    error={fmk.touched.apellido && Boolean(fmk.errors.apellido)}
                    helperText={fmk.touched.apellido && fmk.errors.apellido}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesFisicas.tipoID"
                    name="datosPrincipalesFisicas.tipoID"
                    select
                    label="Tipo de ID"
                    value={fmk.values.tipoID}
                    onChange={fmk.handleChange}
                    error={fmk.touched.tipoID && Boolean(fmk.errors.tipoID)}
                    helperText={fmk.touched.tipoID && fmk.errors.tipoID}
                    fullWidth
                    required
                    
                >
                    {nationalIds.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesFisicas.id"
                    name="datosPrincipalesFisicas.id"
                    required
                    fullWidth
                    label="ID"
                    variant="outlined"
                    value={fmk.values.id}
                    onChange={fmk.handleChange}
                    error={fmk.touched.id && Boolean(fmk.errors.id)}
                    helperText={fmk.touched.id && fmk.errors.id}
                />
            </Grid>
        </>
    )
}
