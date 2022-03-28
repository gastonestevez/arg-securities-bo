import React, { useState } from "react"
import {
    Box,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Formik } from "formik";
export const MediosDeComunicacion = ({ fmk }) => {
    const tiposDeMedios = [
        "Movil",
        "E-Mail",
        "Fax",
        "Conexión directa",
        "Teléfono",
        "Facebook",
        "Linkedin",
        "Google+",
    ]
    const tiposDeuso = ["Personal", "Laboral", "Comercial", "Otro"]
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography component="h5" variant="h5">
                            Medios de contacto
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Correo electrónico"
                    fullWidth
                    required
                    id="mediocomunicacion.[0].tipo"
                    name="mediocomunicacion[0].tipo"
                    inputProps={
                        { readOnly: true, }
                    }
                    disabled
                    variant={'outlined'}
                    value={fmk.values.mediocomunicacion[0]?.tipo}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.tipo &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[0]?.tipo)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.tipo &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[0]?.tipo
                    }
                >
                    {tiposDeMedios.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Dirección de correo electrónico"
                    variant="outlined"
                    id="mediocomunicacion.[0].medio"
                    name="mediocomunicacion[0].medio"
                    value={fmk.values.mediocomunicacion[0]?.medio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.medio &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[0]?.medio)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.medio &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[0]?.tipo
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id="mediocomunicacion.[0].uso"
                    name="mediocomunicacion[0].uso"
                    value={fmk.values.mediocomunicacion[0]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.uso &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[0]?.uso)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[0]?.uso &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[0]?.uso
                    }
                >
                    {tiposDeuso.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Teléfono"
                    disabled
                    fullWidth
                    required
                    id="mediocomunicacion.[1].tipo"
                    name="mediocomunicacion[1].tipo"
                    value={fmk.values.mediocomunicacion[1]?.tipo}
                    inputProps={
                        { readOnly: true, }
                    }
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.tipo &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[1]?.tipo)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.tipo &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[1]?.tipo
                    }
                >
                    {tiposDeMedios.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nro. de teléfono"
                    variant="outlined"
                    id="mediocomunicacion.[1].medio"
                    name="mediocomunicacion[1].medio"
                    value={fmk.values.mediocomunicacion[1]?.medio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.medio &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[1]?.medio)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.medio &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[1]?.tipo
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id="mediocomunicacion.[1].uso"
                    name="mediocomunicacion[1].uso"
                    value={fmk.values.mediocomunicacion[1]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.uso &&
                        fmk.errors.mediocomunicacion &&
                        Boolean(fmk.errors.mediocomunicacion[1]?.uso)
                    }
                    helperText={
                        fmk.touched.mediocomunicacion &&
                        fmk.touched.mediocomunicacion[1]?.uso &&
                        fmk.errors.mediocomunicacion &&
                        fmk.errors.mediocomunicacion[1]?.uso
                    }
                >
                    {tiposDeuso.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </>
    )
}
