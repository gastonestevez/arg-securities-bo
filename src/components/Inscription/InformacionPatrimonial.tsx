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

export const InformacionPatrimonial = ({ fmk }) => {
    const [fecha, setFecha] = useState("")
    const [vencimiento, setVencimiento] = useState("")
    const [fondeo, setFondeo] = useState("")
    const [procedencia, setProcedencia] = useState("")
    const procedencias = ["Actividad principal", "Renta", "Otro"]
    const fondeos = [
        "Transferencia en pesos",
        "Transferencia en dólares",
        "Cheques propios",
        "Cheques de terceros",
        "Títulos",
    ]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Información patrimonial
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label={"Fecha"}
                    id={"infoPatrimonial.fecha"}
                    name={"infoPatrimonial.fecha"}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.infoPatrimonial?.fecha}
                    error={
                        fmk.touched.infoPatrimonial?.fecha &&
                        Boolean(fmk.errors.infoPatrimonial?.fecha)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.fecha &&
                        fmk.errors.infoPatrimonial?.fecha
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Patrimonio (ARS)"
                    variant="outlined"
                    type={"number"}
                    id={"infoPatrimonial.patrimonio"}
                    name={"infoPatrimonial.patrimonio"}
                    value={fmk.values.infoPatrimonial?.patrimonio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial?.patrimonio &&
                        Boolean(fmk.errors.infoPatrimonial?.patrimonio)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.patrimonio &&
                        fmk.errors.infoPatrimonial?.patrimonio
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Ingresos anuales (ARS)"
                    variant="outlined"
                    type={"number"}
                    id={"infoPatrimonial.ingresos"}
                    name={"infoPatrimonial.ingresos"}
                    value={fmk.values.infoPatrimonial?.ingresos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial?.ingresos &&
                        Boolean(fmk.errors.infoPatrimonial?.ingresos)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.ingresos &&
                        fmk.errors.infoPatrimonial?.ingresos
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Destinado a inversiones (%)"
                    variant="outlined"
                    type={"number"}
                    id={"infoPatrimonial.inversion"}
                    name={"infoPatrimonial.inversion"}
                    value={fmk.values.infoPatrimonial?.inversion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial?.inversion &&
                        Boolean(fmk.errors.infoPatrimonial?.inversion)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.inversion &&
                        fmk.errors.infoPatrimonial?.inversion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Procedencia de fondos"
                    fullWidth
                    required
                    id={"infoPatrimonial.procedenciaFondos"}
                    name={"infoPatrimonial.procedenciaFondos"}
                    value={fmk.values.infoPatrimonial?.procedenciaFondos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial?.procedenciaFondos &&
                        Boolean(fmk.errors.infoPatrimonial?.procedenciaFondos)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.procedenciaFondos &&
                        fmk.errors.infoPatrimonial?.procedenciaFondos
                    }
                >
                    {procedencias.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Observaciones"
                    variant="outlined"
                    disabled={procedencia !== "Otro"}
                    id={"infoPatrimonial.observaciones"}
                    name={"infoPatrimonial.observaciones"}
                    value={fmk.values.infoPatrimonial?.observaciones}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial?.observaciones &&
                        Boolean(fmk.errors.infoPatrimonial?.observaciones)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial?.observaciones &&
                        fmk.errors.infoPatrimonial?.observaciones
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography component="h6" variant="h6">
                    Medio de fondeo
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormGroup>
                    <Grid container spacing={2}>
                        {fondeos.map((f) => {
                            return (
                                <Grid item sm={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                required
                                                name={"infoPatrimonial.fondeo"}
                                                value={f}
                                                onChange={fmk.handleChange}
                                            />
                                        }
                                        label={f}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </FormGroup>
            </Grid>
        </>
    )
}
