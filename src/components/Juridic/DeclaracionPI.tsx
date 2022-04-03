import {
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material"
import React, { useState } from "react"

export const DeclaracionPI = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Declaraciones PI
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            id={"declaracionesPI.inscripcionSujetoObligado"}
                            name={"declaracionesPI.inscripcionSujetoObligado"}
                            value={true}
                            onChange={fmk.handleChange}
                        />
                    }
                    label={"¿Es sujeto obligado?"}
                />
            </Grid>
        </>
    )
}
