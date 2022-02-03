import { Box, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import React from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import { activities } from "../../../form/activities"

export const Actividad = ({ index, fmk, arrayHelper }) => {
    return (
        <>
            <Grid item xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography component="p">
                        Actividad {`${index + 1}`}
                    </Typography>
                    <IconButton
                        onClick={() => arrayHelper.remove(index)}
                        color="secondary"
                        aria-label="delete"
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    // select
                    required
                    fullWidth
                    label="Actividad principal"
                    variant="outlined"
                    id={`actividadPersona.[${index}].actividad`}
                    name={`actividadPersona[${index}].actividad`}
                    value={fmk.values.actividadPersona[index]?.actividad}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.actividad &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.actividad)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.actividad &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.actividad
                    }
                />
                    {/* {activities.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                    </TextField> */}
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Rubro"
                    variant="outlined"
                    id={`actividadPersona.[${index}].rubro`}
                    name={`actividadPersona[${index}].rubro`}
                    value={fmk.values.actividadPersona[index]?.rubro}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.rubro &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.rubro)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.rubro &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.rubro
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Puesto"
                    variant="outlined"
                    id={`actividadPersona.[${index}].puesto`}
                    name={`actividadPersona[${index}].puesto`}
                    value={fmk.values.actividadPersona[index]?.puesto}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.puesto &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.puesto)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.puesto &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.puesto
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                    id={`actividadPersona.[${index}].departamento`}
                    name={`actividadPersona[${index}].departamento`}
                    value={fmk.values.actividadPersona[index]?.departamento}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.departamento &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.departamento)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.departamento &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.departamento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Organización"
                    variant="outlined"
                    id={`actividadPersona.[${index}].organizacion`}
                    name={`actividadPersona[${index}].organizacion`}
                    value={fmk.values.actividadPersona[index]?.organizacion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.organizacion &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.organizacion)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.organizacion &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.organizacion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Observaciones"
                    variant="outlined"
                    id={`actividadPersona.[${index}].observaciones`}
                    name={`actividadPersona[${index}].observaciones`}
                    value={fmk.values.actividadPersona[index]?.observaciones}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.observaciones &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.observaciones)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.observaciones &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.observaciones
                    }
                />
            </Grid>
        </>
    )
}
