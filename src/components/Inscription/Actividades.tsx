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

export const Actividades = () => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Actividades
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    label="Actividad principal"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}
