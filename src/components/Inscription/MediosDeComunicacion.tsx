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
                            Medios de comunicación
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Tipo de medio"
                    fullWidth
                    required
                    id="medioComunicacion.[0].tipo"
                    name="medioComunicacion[0].tipo"
                    inputProps={
                        { readOnly: true, }
                    }
                    disabled
                    variant={'outlined'}
                    value={fmk.values.medioComunicacion[0]?.tipo}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.tipo &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[0]?.tipo)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.tipo &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[0]?.tipo
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
                    label="Medio"
                    variant="outlined"
                    id="medioComunicacion.[0].medio"
                    name="medioComunicacion[0].medio"
                    value={fmk.values.medioComunicacion[0]?.medio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.medio &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[0]?.medio)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.medio &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[0]?.tipo
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id="medioComunicacion.[0].uso"
                    name="medioComunicacion[0].uso"
                    value={fmk.values.medioComunicacion[0]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.uso &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[0]?.uso)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.uso &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[0]?.uso
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
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id="medioComunicacion.[0].notas"
                    name="medioComunicacion[0].notas"
                    value={fmk.values.medioComunicacion[0]?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.notas &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[0]?.notas)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[0]?.notas &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[0]?.notas
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Tipo de medio"
                    disabled
                    fullWidth
                    required
                    id="medioComunicacion.[1].tipo"
                    name="medioComunicacion[1].tipo"
                    value={fmk.values.medioComunicacion[1]?.tipo}
                    inputProps={
                        { readOnly: true, }
                    }
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.tipo &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[1]?.tipo)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.tipo &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[1]?.tipo
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
                    label="Medio"
                    variant="outlined"
                    id="medioComunicacion.[1].medio"
                    name="medioComunicacion[1].medio"
                    value={fmk.values.medioComunicacion[1]?.medio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.medio &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[1]?.medio)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.medio &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[1]?.tipo
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id="medioComunicacion.[1].uso"
                    name="medioComunicacion[1].uso"
                    value={fmk.values.medioComunicacion[1]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.uso &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[1]?.uso)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.uso &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[1]?.uso
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
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id="medioComunicacion.[1].notas"
                    name="medioComunicacion[1].notas"
                    value={fmk.values.medioComunicacion[1]?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.notas &&
                        fmk.errors.medioComunicacion &&
                        Boolean(fmk.errors.medioComunicacion[1]?.notas)
                    }
                    helperText={
                        fmk.touched.medioComunicacion &&
                        fmk.touched.medioComunicacion[1]?.notas &&
                        fmk.errors.medioComunicacion &&
                        fmk.errors.medioComunicacion[1]?.notas
                    }
                />
            </Grid>
            
        </>
    )
}
