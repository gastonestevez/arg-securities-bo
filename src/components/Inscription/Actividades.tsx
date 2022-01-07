import {
    Grid,
    TextField,
    Typography,
} from "@mui/material"
import React from "react"

export const Actividades = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Actividades
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Actividad principal"
                    variant="outlined"
                    id={"actividadPersona.actividad"}
                    name={"actividadPersona.actividad"}
                    value={fmk.values.actividadPersona?.actividad}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.actividad && Boolean(fmk.errors.actividadPersona?.actividad)}
                    helperText={fmk.touched.actividadPersona?.actividad && fmk.errors.actividadPersona?.actividad}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Rubro"
                    variant="outlined"
                    id={"actividadPersona.rubro"}
                    name={"actividadPersona.rubro"}
                    value={fmk.values.actividadPersona?.rubro}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.rubro && Boolean(fmk.errors.actividadPersona?.rubro)}
                    helperText={fmk.touched.actividadPersona?.rubro && fmk.errors.actividadPersona?.rubro}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Puesto"
                    variant="outlined"
                    id={"actividadPersona.puesto"}
                    name={"actividadPersona.puesto"}
                    value={fmk.values.actividadPersona?.puesto}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.puesto && Boolean(fmk.errors.actividadPersona?.puesto)}
                    helperText={fmk.touched.actividadPersona?.puesto && fmk.errors.actividadPersona?.puesto}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                    id={"actividadPersona.departamento"}
                    name={"actividadPersona.departamento"}
                    value={fmk.values.actividadPersona?.departamento}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.departamento && Boolean(fmk.errors.actividadPersona?.departamento)}
                    helperText={fmk.touched.actividadPersona?.departamento && fmk.errors.actividadPersona?.departamento}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Organización"
                    variant="outlined"
                    id={"actividadPersona.organizacion"}
                    name={"actividadPersona.organizacion"}
                    value={fmk.values.actividadPersona?.organizacion}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.organizacion && Boolean(fmk.errors.actividadPersona?.organizacion)}
                    helperText={fmk.touched.actividadPersona?.organizacion && fmk.errors.actividadPersona?.organizacion}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Observaciones"
                    variant="outlined"
                    id={"actividadPersona.observaciones"}
                    name={"actividadPersona.observaciones"}
                    value={fmk.values.actividadPersona?.observaciones}
                    onChange={fmk.handleChange}
                    error={fmk.touched.actividadPersona?.observaciones && Boolean(fmk.errors.actividadPersona?.observaciones)}
                    helperText={fmk.touched.actividadPersona?.observaciones && fmk.errors.actividadPersona?.observaciones}
                />
            </Grid>
        </>
    )
}
