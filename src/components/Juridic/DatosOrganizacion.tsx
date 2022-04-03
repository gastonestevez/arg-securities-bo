import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import React from "react"
import { countries } from "../../form/countries"

export const DatosOrganizacion = ({ fmk }) => {

    return (
        <>
        <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos de la organización
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label={"Fecha"}
                    id={`datosOrganizacion.fechaConstitucion`}
                    name={`datosOrganizacion.fechaConstitucion`}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.datosOrganizacion?.fechaConstitucion}
                    error={
                        fmk.touched.datosOrganizacion &&
                        fmk.touched.datosOrganizacion?.fechaConstitucion &&
                        fmk.errors.datosOrganizacion &&
                        Boolean(fmk.errors.datosOrganizacion?.fechaConstitucion)
                    }
                    helperText={
                        fmk.touched.datosOrganizacion &&
                        fmk.touched.datosOrganizacion?.fechaConstitucion &&
                        fmk.errors.datosOrganizacion &&
                        fmk.errors.datosOrganizacion?.fechaConstitucion
                    }
                />
            </Grid>
            
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nº de acta de constitución"
                    variant="outlined"
                    id={"datosOrganizacion.actaConstitucion"}
                    name={"datosOrganizacion.actaConstitucion"}
                    value={fmk.values.datosOrganizacion?.actaConstitucion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosOrganizacion?.actaConstitucion &&
                        Boolean(fmk.errors.datosOrganizacion?.actaConstitucion)
                    }
                    helperText={
                        fmk.touched.datosOrganizacion?.actaConstitucion &&
                        fmk.errors.datosOrganizacion?.actaConstitucion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    required
                    fullWidth
                    label="País de origen"
                    variant="outlined"
                    id="datosOrganizacion.paisOrigen"
                    name="datosOrganizacion.paisOrigen"
                    value={fmk.values.datosOrganizacion?.paisOrigen}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosOrganizacion?.paisOrigen &&
                        Boolean(fmk.errors.datosOrganizacion?.paisOrigen)
                    }
                    helperText={
                        fmk.touched.datosOrganizacion?.paisOrigen &&
                        fmk.errors.datosOrganizacion?.paisOrigen
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
                    id="datosOrganizacion.paisResidencia"
                    name="datosOrganizacion.paisResidencia"
                    value={fmk.values.datosOrganizacion?.paisResidencia}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosOrganizacion?.paisResidencia &&
                        Boolean(fmk.errors.datosOrganizacion?.paisResidencia)
                    }
                    helperText={
                        fmk.touched.datosOrganizacion?.paisResidencia &&
                        fmk.errors.datosOrganizacion?.paisResidencia
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
                    fullWidth
                    label={"Cierre de balance"}
                    id={`datosOrganizacion.cierreBalance`}
                    name={`datosOrganizacion.cierreBalance`}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.datosOrganizacion?.cierreBalance}
                    error={
                        fmk.touched.datosOrganizacion &&
                        fmk.touched.datosOrganizacion?.cierreBalance &&
                        fmk.errors.datosOrganizacion &&
                        Boolean(fmk.errors.datosOrganizacion?.cierreBalance)
                    }
                    helperText={
                        fmk.touched.datosOrganizacion &&
                        fmk.touched.datosOrganizacion?.cierreBalance &&
                        fmk.errors.datosOrganizacion &&
                        fmk.errors.datosOrganizacion?.cierreBalance
                    }
                />
            </Grid>
        </>
    )
}
