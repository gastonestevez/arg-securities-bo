import {
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Switch
} from "@mui/material"
import React from "react"

export const Declaraciones = ({fmk, juridic}) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Declaraciones
                </Typography>
            </Grid>
            {
                !juridic && (
                    <Grid item xs={12} sm={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    id={"declaracionesPF.expuestaPoliticamente"}
                                    name={"declaracionesPF.expuestaPoliticamente"}
                                    value={true}
                                    onChange={fmk.handleChange}
                                />
                            }
                            label={"NO/SI ¿La persona está expuesta políticamente?"}
                        />
                    </Grid>
                )
            }
            {
                !!fmk.values.declaracionesPF?.expuestaPoliticamente && (
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            label="Observaciones"
                            variant="outlined"
                            required={!!fmk.values.declaracionesPF.expuestaPoliticamente}
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

                )
            }
            <Grid item xs={12} sm={12}>
                <FormControlLabel
                    control={
                        <Switch
                            id={"declaracionesPF.sujetoObligado"}
                            name={"declaracionesPF.sujetoObligado"}
                            value={true}
                            onChange={fmk.handleChange}
                        />
                    }
                    label={
                        "NO/SI ¿La persona está inscripta como sujeto obligado UIF?"
                    }
                />
            </Grid>
            {
                !!fmk.values.declaracionesPF?.sujetoObligado && (
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            label="Nº de inscripción"
                            variant="outlined"
                            type={"text"}
                            required={!!fmk.values.declaracionesPF.sujetoObligado}
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
                )
            }
        </>
    )
}
