import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid, Typography } from "@mui/material"

export const DatosPrincipales = () => {
    const nationalIds = ["DNI", "LE", "Pasaporte"]

    const [nationalId, setNationalId] = useState("")
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
                    label="Nombres"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Apellidos"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de ID"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    fullWidth
                    required
                >
                    {nationalIds.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="ID" variant="outlined" />
            </Grid>
        </>
    )
}
