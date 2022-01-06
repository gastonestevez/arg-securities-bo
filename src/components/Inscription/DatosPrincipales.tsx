import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid, Typography } from "@mui/material"

export const DatosPrincipales = ({ fmk }) => {
    const nationalIds = ["DNI", "LC", "LE", "EXT", "PAS"]
    console.log(fmk.values)
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos principales
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nombres"
                    variant="outlined"
                    id="datosPrincipalesFisicas.nombre"
                    name="datosPrincipalesFisicas.nombre"
                    value={fmk.values.datosPrincipalesFisicas?.nombre}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesFisicas?.nombre && Boolean(fmk.errors.datosPrincipalesFisicas?.nombre)}
                    helperText={fmk.touched.datosPrincipalesFisicas?.nombre && fmk.errors.datosPrincipalesFisicas?.nombre}
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
                    value={fmk.values.datosPrincipalesFisicas?.apellido}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesFisicas?.apellido && Boolean(fmk.errors.datosPrincipalesFisicas?.apellido)}
                    helperText={fmk.touched.datosPrincipalesFisicas?.apellido && fmk.errors.datosPrincipalesFisicas?.apellido}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesFisicas.tipoID"
                    name="datosPrincipalesFisicas.tipoID"
                    select
                    defaultValue={''}
                    label="Tipo de ID"
                    value={fmk.values.datosPrincipalesFisicas?.tipoID}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesFisicas?.tipoID && Boolean(fmk.errors.datosPrincipalesFisicas?.tipoID)}
                    helperText={fmk.touched.datosPrincipalesFisicas?.tipoID && fmk.errors.datosPrincipalesFisicas?.tipoID}
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
                    value={fmk.values.datosPrincipalesFisicas?.id}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesFisicas?.id && Boolean(fmk.errors.datosPrincipalesFisicas?.id)}
                    helperText={fmk.touched.datosPrincipalesFisicas?.id && fmk.errors.datosPrincipalesFisicas?.id}
                />
            </Grid>
        </>
    )
}
