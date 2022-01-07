import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import frLocale from "date-fns/locale/fr"
import React, { useState } from "react"

export const Declaraciones = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Declaraciones
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            id={"declaracionesPF.expuestaPoliticamente"}
                            name={"declaracionesPF.expuestaPoliticamente"}
                            value={true}
                            onChange={fmk.handleChange}
                        />
                    }
                    label={"¿La persona está expuesta políticamente?"}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Observaciones"
                    variant="outlined"
                    id={"actividadPersona.detalleExpPoliticamente"}
                    name={"actividadPersona.detalleExpPoliticamente"}
                    value={fmk.values.actividadPersona?.detalleExpPoliticamente}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona?.detalleExpPoliticamente &&
                        Boolean(
                            fmk.errors.actividadPersona?.detalleExpPoliticamente
                        )
                    }
                    helperText={
                        fmk.touched.actividadPersona?.detalleExpPoliticamente &&
                        fmk.errors.actividadPersona?.detalleExpPoliticamente
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            id={"declaracionesPF.sujetoObligado"}
                            name={"declaracionesPF.sujetoObligado"}
                            value={true}
                            onChange={fmk.handleChange}
                        />
                    }
                    label={
                        "¿La persona está inscripta como sujeto obligado UIF?"
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Nº de inscripción"
                    variant="outlined"
                    type={"number"}
                    id={"declaracionesPF.numeroInscripcion"}
                    name={"declaracionesPF.numeroInscripcion"}
                    value={fmk.values.declaracionesPF?.numeroInscripcion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.declaracionesPF?.numeroInscripcion &&
                        Boolean(fmk.errors.declaracionesPF?.numeroInscripcion)
                    }
                    helperText={
                        fmk.touched.declaracionesPF?.numeroInscripcion &&
                        fmk.errors.declaracionesPF?.numeroInscripcion
                    }
                />
            </Grid>
        </>
    )
}
