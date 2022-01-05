import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid, Typography } from "@mui/material"

export const DatosFiscalesNacionales = () => {
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
        "Responsable",
        "monotributo",
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
                    id="outlined-select-currency"
                    select
                    label="Tipo de Clave Fiscal"
                    value={tipoDeClave}
                    onChange={(e) => setTipoDeClave(e.target.value)}
                    fullWidth
                    required
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
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de Responsable IVA"
                    value={tipoDeResponsableIva}
                    onChange={(e) => setTipoDeResponsableIva(e.target.value)}
                    fullWidth
                    required
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
                    id="outlined-select-currency"
                    select
                    label="Tipo de Responsable Ganancias"
                    value={tipoDeResponsableGanancias}
                    onChange={(e) =>
                        setTipoDeResponsableGanancias(e.target.value)
                    }
                    fullWidth
                    required
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
