import { Box, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import React from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export const InfoPatrimonial = ({ index, fmk, arrayHelper }) => {
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
        <Grid item xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography component="p">
                        Patrimonio {`${index + 1}`}
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
                    fullWidth
                    label={"Fecha"}
                    id={`infoPatrimonial.[${index}].fecha`}
                    name={`infoPatrimonial[${index}].fecha`}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.infoPatrimonial?.fecha}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.fecha &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.fecha)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.fecha &&
                        fmk.errors.infoPatrimonial[index]?.fecha
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Patrimonio (ARS)"
                    variant="outlined"
                    type={"number"}
                    id={`infoPatrimonial.[${index}].patrimonio`}
                    name={`infoPatrimonial[${index}].patrimonio`}
                    value={fmk.values.infoPatrimonial?.patrimonio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.patrimonio &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.patrimonio)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.patrimonio &&
                        fmk.errors.infoPatrimonial[index]?.patrimonio
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
                    id={`infoPatrimonial.[${index}].ingresos`}
                    name={`infoPatrimonial[${index}].ingresos`}
                    value={fmk.values.infoPatrimonial?.ingresos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.ingresos &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.ingresos)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.ingresos &&
                        fmk.errors.infoPatrimonial[index]?.ingresos
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
                    id={`infoPatrimonial.[${index}].inversion`}
                    name={`infoPatrimonial[${index}].inversion`}
                    value={fmk.values.infoPatrimonial?.inversion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.inversion &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.inversion)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.inversion &&
                        fmk.errors.infoPatrimonial[index]?.inversion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Procedencia de fondos"
                    fullWidth
                    required
                    id={`infoPatrimonial.[${index}].procedenciaFondos`}
                    name={`infoPatrimonial[${index}].procedenciaFondos`}
                    value={fmk.values.infoPatrimonial?.procedenciaFondos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.procedenciaFondos &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.procedenciaFondos)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.procedenciaFondos &&
                        fmk.errors.infoPatrimonial[index]?.procedenciaFondos
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
                    id={`infoPatrimonial.[${index}].observaciones`}
                    name={`infoPatrimonial[${index}].observaciones`}
                    value={fmk.values.infoPatrimonial?.observaciones}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.observaciones &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.observaciones)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.observaciones &&
                        fmk.errors.infoPatrimonial[index]?.observaciones
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
                                                id={`infoPatrimonial.[${index}].fondeo`}
                                                name={`infoPatrimonial[${index}].fondeo`}
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
