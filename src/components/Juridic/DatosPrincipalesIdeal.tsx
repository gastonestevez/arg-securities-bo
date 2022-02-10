import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Grid, Typography } from "@mui/material"

export const DatosPrincipalesIdeal = ({ fmk }) => {
    const nationalIds = ["CUIT", "CDI"]
    const tiposDeOrganizacion = ["Agrupación", "Asociación", "Cooperativa", "Sociedad anónima", "Sociedad sin fines de lucro", "SRL", "SAS"]
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
                    label="Denominación"
                    variant="outlined"
                    id="datosPrincipalesIdeal.denominacion"
                    name="datosPrincipalesIdeal.denominacion"
                    value={fmk.values.datosPrincipalesIdeal?.denominacion}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesIdeal?.denominacion && Boolean(fmk.errors.datosPrincipalesIdeal?.denominacion)}
                    helperText={fmk.touched.datosPrincipalesIdeal?.denominacion && fmk.errors.datosPrincipalesIdeal?.denominacion}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesIdeal.tipoDeOrganizacion"
                    name="datosPrincipalesIdeal.tipoDeOrganizacion"
                    select
                    defaultValue={''}
                    label="Tipo de organizacion"
                    value={fmk.values.datosPrincipalesIdeal?.tipoDeOrganizacion}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesIdeal?.tipoDeOrganizacion && Boolean(fmk.errors.datosPrincipalesIdeal?.tipoDeOrganizacion)}
                    helperText={fmk.touched.datosPrincipalesIdeal?.tipoDeOrganizacion && fmk.errors.datosPrincipalesIdeal?.tipoDeOrganizacion}
                    fullWidth
                    required
                    
                >
                    {tiposDeOrganizacion.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="datosPrincipalesIdeal.tipoID"
                    name="datosPrincipalesIdeal.tipoID"
                    select
                    defaultValue={''}
                    label="Tipo de ID"
                    value={fmk.values.datosPrincipalesIdeal?.tipoID}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesIdeal?.tipoID && Boolean(fmk.errors.datosPrincipalesIdeal?.tipoID)}
                    helperText={fmk.touched.datosPrincipalesIdeal?.tipoID && fmk.errors.datosPrincipalesIdeal?.tipoID}
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
                    id="datosPrincipalesIdeal.id"
                    name="datosPrincipalesIdeal.id"
                    required
                    fullWidth
                    label="ID"
                    variant="outlined"
                    value={fmk.values.datosPrincipalesIdeal?.id}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosPrincipalesIdeal?.id && Boolean(fmk.errors.datosPrincipalesIdeal?.id)}
                    helperText={fmk.touched.datosPrincipalesIdeal?.id && fmk.errors.datosPrincipalesIdeal?.id}
                />
            </Grid>
        </>
    )
}
