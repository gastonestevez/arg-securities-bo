import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Grid, Typography } from "@mui/material"

export const ActividadOrganizacion = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Actividad de la organización
                </Typography>
            </Grid>
            
            <Grid item xs={12} sm={12}>
                <TextField
                    id="actividadOrganizacion.actividad"
                    name="actividadOrganizacion.actividad"
                    required
                    fullWidth
                    label="Actividad"
                    variant="outlined"
                    value={fmk.values.actividadOrganizacion?.actividad}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadOrganizacion?.actividad && Boolean(fmk.errors.actividadOrganizacion?.actividad)}
                    helperText={fmk.touched.actividadOrganizacion?.actividad && fmk.errors.actividadOrganizacion?.actividad}
                />
            </Grid>
            
            
        </>
    )
}
