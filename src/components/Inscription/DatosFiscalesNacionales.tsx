import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid, Typography } from "@mui/material"

export const DatosFiscalesNacionales = ({ fmk }) => {
    const tiposDeClavesFiscales = ["CUIL", "CUIT"]
    const tiposDeResponsablesIVA = [
        "Responsable inscripto",
        "Responsable monotributo",
        "Consumidor final",
        "No categorizado",
        "No alcanzado",
        "Exento",
    ]
    const tiposDeResponsablesGanancias = [
        "Inscripto",
        "No inscripto",
        "Exento",
        "Responsable monotributo",
    ]
    const [tipoDeClave, setTipoDeClave] = useState("")
    const [tipoDeResponsableIva, setTipoDeResponsableIva] = useState("")
    const [tipoDeResponsableGanancias, setTipoDeResponsableGanancias] =
        useState("")

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos fiscales nacionales
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de Clave Fiscal"
                    fullWidth
                    required
                    id="datosFiscales.tipoCodigo"
                    name="datosFiscales.tipoCodigo"
                    value={fmk.values.datosFiscales.tipoCodigo}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosFiscales?.tipoCodigo && Boolean(fmk.errors.datosFiscales?.tipoCodigo)}
                    helperText={fmk.touched.datosFiscales?.tipoCodigo && fmk.errors.datosFiscales?.tipoCodigo}
                >
                    {tiposDeClavesFiscales.map((option) => (
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
                    label="Clave fiscal"
                    variant="outlined"
                    id="datosFiscales.cuit"
                    name="datosFiscales.cuit"
                    value={fmk.values.datosFiscales.cuit}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosFiscales?.cuit && Boolean(fmk.errors.datosFiscales?.cuit)}
                    helperText={fmk.touched.datosFiscales?.cuit && fmk.errors.datosFiscales?.cuit}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de Responsable IVA"
                    fullWidth
                    required
                    id="datosFiscales.tipoResponsableIVA"
                    name="datosFiscales.tipoResponsableIVA"
                    value={fmk.values.datosFiscales.tipoResponsableIVA}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosFiscales?.tipoResponsableIVA && Boolean(fmk.errors.datosFiscales?.tipoResponsableIVA)}
                    helperText={fmk.touched.datosFiscales?.tipoResponsableIVA && fmk.errors.datosFiscales?.tipoResponsableIVA}
                >
                    {tiposDeResponsablesIVA.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de Responsable Ganancias"
                    fullWidth
                    required
                    id="datosFiscales.tipoResponsableGanancias"
                    name="datosFiscales.tipoResponsableGanancias"
                    value={fmk.values.datosFiscales.tipoResponsableGanancias}
                    onChange={fmk.handleChange}
                    error={fmk.touched.datosFiscales?.tipoResponsableGanancias && Boolean(fmk.errors.datosFiscales?.tipoResponsableGanancias)}
                    helperText={fmk.touched.datosFiscales?.tipoResponsableGanancias && fmk.errors.datosFiscales?.tipoResponsableGanancias}
                >
                    {tiposDeResponsablesGanancias.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </>
    )
}
