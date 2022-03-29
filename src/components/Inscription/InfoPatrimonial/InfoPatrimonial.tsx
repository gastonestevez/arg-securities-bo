import {
    Alert,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import React, { useState } from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import NumberFormat from "react-number-format"
import { CustomNumberFormat } from "../../CustomNumberFormat/CustomNumberFormat"

export const InfoPatrimonial = ({ index, fmk, arrayHelper }) => {
    const [otros, setOtros] = useState(false)

    const procedencias = [
        {
            title: "Ocupación Actual",
            value: "Actividad principal",
        },
        {
            title: "Renta",
            value: "Renta",
        },
        {
            title: "Otro",
            value: "Otro",
        },
    ]
    const fondeos = [
        "Transferencia en $",
        "Transferencia en u$s",
        "Cheques propios",
        "Cheques de terceros",
        "Plazos fijos transferibles",
        "Otros",
    ]

    const handleFondeoChange = (e) => {
        const { value } = e.target
        if (value === "Otros") setOtros(!otros)
        fmk.handleChange(e)
    }

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
                    disabled
                    value={new Date().toISOString().substring(0, 10)}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.fecha &&
                        fmk.errors.infoPatrimonial &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.fecha)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.fecha &&
                        fmk.errors.infoPatrimonial &&
                        fmk.errors.infoPatrimonial[index]?.fecha
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Patrimonio (ARS)"
                    variant="outlined"
                    id={`infoPatrimonial.[${index}].patrimonio`}
                    name={`infoPatrimonial[${index}].patrimonio`}
                    value={fmk.values.infoPatrimonial?.patrimonio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.patrimonio &&
                        fmk.errors.infoPatrimonial &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.patrimonio)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.patrimonio &&
                        fmk.errors.infoPatrimonial &&
                        fmk.errors.infoPatrimonial[index]?.patrimonio
                    }
                    InputProps={{
                        inputComponent: CustomNumberFormat as any,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Ingresos anuales (ARS)"
                    variant="outlined"
                    id={`infoPatrimonial.[${index}].ingresos`}
                    name={`infoPatrimonial[${index}].ingresos`}
                    value={fmk.values.infoPatrimonial?.ingresos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.ingresos &&
                        fmk.errors.infoPatrimonial &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.ingresos)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.ingresos &&
                        fmk.errors.infoPatrimonial &&
                        fmk.errors.infoPatrimonial[index]?.ingresos
                    }
                    InputProps={{
                        inputComponent: CustomNumberFormat as any,
                    }}
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
                        fmk.errors.infoPatrimonial &&
                        Boolean(fmk.errors.infoPatrimonial[index]?.inversion)
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.inversion &&
                        fmk.errors.infoPatrimonial &&
                        fmk.errors.infoPatrimonial[index]?.inversion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Origen de fondos operados"
                    fullWidth
                    required
                    id={`infoPatrimonial.[${index}].procedenciaFondos`}
                    name={`infoPatrimonial[${index}].procedenciaFondos`}
                    value={fmk.values.infoPatrimonial?.procedenciaFondos}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.procedenciaFondos &&
                        fmk.errors.infoPatrimonial &&
                        Boolean(
                            fmk.errors.infoPatrimonial[index]?.procedenciaFondos
                        )
                    }
                    helperText={
                        fmk.touched.infoPatrimonial &&
                        fmk.touched.infoPatrimonial[index]?.procedenciaFondos &&
                        fmk.errors.infoPatrimonial &&
                        fmk.errors.infoPatrimonial[index]?.procedenciaFondos
                    }
                >
                    {procedencias.map((option) => (
                        <MenuItem key={option.title} value={option.value}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Typography component="h6" variant="h6">
                    Medios utilizados para fondear la cuenta
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
                                                onChange={(e) =>
                                                    handleFondeoChange(e)
                                                }
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
            {otros && (
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        required
                        label="Observaciones"
                        variant="outlined"
                        id={`infoPatrimonial.[${index}].observaciones`}
                        name={`infoPatrimonial[${index}].observaciones`}
                        value={fmk.values.infoPatrimonial?.observaciones}
                        onChange={fmk.handleChange}
                        error={
                            fmk.touched.infoPatrimonial &&
                            fmk.touched.infoPatrimonial[index]?.observaciones &&
                            fmk.errors.infoPatrimonial &&
                            Boolean(
                                fmk.errors.infoPatrimonial[index]?.observaciones
                            )
                        }
                        helperText={
                            fmk.touched.infoPatrimonial &&
                            fmk.touched.infoPatrimonial[index]?.observaciones &&
                            fmk.errors.infoPatrimonial &&
                            fmk.errors.infoPatrimonial[index]?.observaciones
                        }
                    />
                </Grid>
            )}
        </>
    )
}
