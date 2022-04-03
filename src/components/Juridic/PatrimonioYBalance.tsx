import React from "react"
import TextField from "@mui/material/TextField"
import { Grid, Typography } from "@mui/material"

export const PatrimonioYBlanace = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Patrimonio y balance
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label={"Fecha"}
                    id={`patrimonioYBalance.fecha`}
                    name={`patrimonioYBalance.fecha`}
                    type={"date"}
                    required
                    defaultValue={""}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={fmk.handleChange}
                    value={fmk.values.patrimonioYBalance?.fecha}
                    error={
                        fmk.touched.patrimonioYBalance &&
                        fmk.touched.patrimonioYBalance?.fecha &&
                        fmk.errors.patrimonioYBalance &&
                        Boolean(fmk.errors.patrimonioYBalance?.fecha)
                    }
                    helperText={
                        fmk.touched.patrimonioYBalance &&
                        fmk.touched.patrimonioYBalance?.fecha &&
                        fmk.errors.patrimonioYBalance &&
                        fmk.errors.patrimonioYBalance?.fecha
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.activos"
                    name="patrimonioYBlanace.activos"
                    required
                    fullWidth
                    type={'number'}
                    label="Activos"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.activos}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.activos && Boolean(fmk.errors.patrimonioYBlanace?.activos)}
                    helperText={fmk.touched.patrimonioYBlanace?.activos && fmk.errors.patrimonioYBlanace?.activos}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.pasivos"
                    name="patrimonioYBlanace.pasivos"
                    required
                    fullWidth
                    type={'number'}
                    label="Pasivos"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.pasivos}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.pasivos && Boolean(fmk.errors.patrimonioYBlanace?.pasivos)}
                    helperText={fmk.touched.patrimonioYBlanace?.pasivos && fmk.errors.patrimonioYBlanace?.pasivos}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.activosCorrientes"
                    name="patrimonioYBlanace.activosCorrientes"
                    required
                    fullWidth
                    type={'number'}
                    label="Activos corrientes"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.activosCorrientes}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.activosCorrientes && Boolean(fmk.errors.patrimonioYBlanace?.activosCorrientes)}
                    helperText={fmk.touched.patrimonioYBlanace?.activosCorrientes && fmk.errors.patrimonioYBlanace?.activosCorrientes}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.patrimonio"
                    name="patrimonioYBlanace.patrimonio"
                    required
                    fullWidth
                    type={'number'}
                    label="Patrimonio"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.patrimonio}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.patrimonio && Boolean(fmk.errors.patrimonioYBlanace?.patrimonio)}
                    helperText={fmk.touched.patrimonioYBlanace?.patrimonio && fmk.errors.patrimonioYBlanace?.patrimonio}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.ingresos"
                    name="patrimonioYBlanace.ingresos"
                    required
                    fullWidth
                    type={'number'}
                    label="Ingresos"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.ingresos}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.ingresos && Boolean(fmk.errors.patrimonioYBlanace?.ingresos)}
                    helperText={fmk.touched.patrimonioYBlanace?.ingresos && fmk.errors.patrimonioYBlanace?.ingresos}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="patrimonioYBlanace.egresos"
                    name="patrimonioYBlanace.egresos"
                    required
                    fullWidth
                    type={'number'}
                    label="Egresos"
                    variant="outlined"
                    value={fmk.values.patrimonioYBlanace?.egresos}
                    onChange={fmk.handleChange}
                    error={fmk.touched.patrimonioYBlanace?.egresos && Boolean(fmk.errors.patrimonioYBlanace?.egresos)}
                    helperText={fmk.touched.patrimonioYBlanace?.egresos && fmk.errors.patrimonioYBlanace?.egresos}
                />
            </Grid>
        </>
    )
}
