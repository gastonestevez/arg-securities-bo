import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

export const DatosConyuge = ({ fmk }) => {
    const tiposDeClavesFiscales = ["CUIL", "CUIT"]
    const nationalIds = ["DNI", "LC", "LE", "EXT", "PAS"]

    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Datos del cónyuge
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Nombres"
                    variant="outlined"
                    id={"datosConyuge.nombre"}
                    name={"datosConyuge.nombre"}
                    value={fmk.values.datosConyuge?.nombre}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.nombre &&
                        Boolean(fmk.errors.datosConyuge?.nombre)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.nombre &&
                        fmk.errors.datosConyuge?.nombre
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Apellidos"
                    variant="outlined"
                    id={"datosConyuge.apellido"}
                    name={"datosConyuge.apellido"}
                    value={fmk.values.datosConyuge?.apellido}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.apellido &&
                        Boolean(fmk.errors.datosConyuge?.apellido)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.apellido &&
                        fmk.errors.datosConyuge?.apellido
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de ID"
                    fullWidth
                    required
                    id={"datosConyuge.tipoID"}
                    name={"datosConyuge.tipoID"}
                    value={fmk.values.datosConyuge?.tipoID}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.tipoID &&
                        Boolean(fmk.errors.datosConyuge?.tipoID)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.tipoID &&
                        fmk.errors.datosConyuge?.tipoID
                    }
                >
                    {nationalIds.map((option) => (
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
                    label="ID"
                    variant="outlined"
                    id={"datosConyuge.id"}
                    name={"datosConyuge.id"}
                    value={fmk.values.datosConyuge?.id}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.id &&
                        Boolean(fmk.errors.datosConyuge?.id)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.id &&
                        fmk.errors.datosConyuge?.id
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de Clave Fiscal"
                    fullWidth
                    id={"datosConyuge.tipoFiscal"}
                    name={"datosConyuge.tipoFiscal"}
                    value={fmk.values.datosConyuge?.tipoFiscal}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.tipoFiscal &&
                        Boolean(fmk.errors.datosConyuge?.tipoFiscal)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.tipoFiscal &&
                        fmk.errors.datosConyuge?.tipoFiscal
                    }
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
                    fullWidth
                    label="Número de CUIT/CUIL/CDI"
                    variant="outlined"
                    id={"datosConyuge.claveFiscal"}
                    name={"datosConyuge.claveFiscal"}
                    value={fmk.values.datosConyuge?.claveFiscal}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.datosConyuge?.claveFiscal &&
                        Boolean(fmk.errors.datosConyuge?.claveFiscal)
                    }
                    helperText={
                        fmk.touched.datosConyuge?.claveFiscal &&
                        fmk.errors.datosConyuge?.claveFiscal
                    }
                />
            </Grid>
        </>
    )
}
