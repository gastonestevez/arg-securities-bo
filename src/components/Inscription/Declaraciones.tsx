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

export const Declaraciones = () => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Declaraciones
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={"¿La persona está expuesta políticamente?"}
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    label="Observaciones"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={"¿La persona está inscripta como sujeto obligado UIF?"}
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    label="Nº de inscripción"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}
