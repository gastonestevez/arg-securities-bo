import { Box, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import React from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export const CuentaBancaria = ({index, fmk, arrayHelper}) => {
    const tipoIds = ["CBU", "CVU"]
    const tipoCuentas = [
        "Cuenta corriente",
        "Caja de ahorro",
        "Cuenta judicial",
        "Otros",
    ]
    const monedas = ["ARS", "EUR", "EURC", "USD", "USDC", "USDL"]
    const usos = ["Personal", "Comercial", "Débitos", "Créditos", "Otro"]


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
                        Cuenta Bancaria {`${index + 1}`}
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
                    select
                    label="Tipo ID"
                    fullWidth
                    required
                    id={`cuentaBancaria.[${index}].tipoID`}
                    name={`cuentaBancaria[${index}].tipoID`}
                    value={fmk.values.cuentaBancaria?.tipoID}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.tipoID &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.tipoID)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.tipoID &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.tipoID
                    }
                >
                    {tipoIds.map((option) => (
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
                    label="CBU/CVU"
                    variant="outlined"
                    id={`cuentaBancaria.[${index}].cbu`}
                    name={`cuentaBancaria[${index}].cbu`}
                    value={fmk.values.cuentaBancaria?.cbu}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.cbu &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.cbu)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.cbu &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.cbu
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Alias CBU/CVU"
                    variant="outlined"
                    id={`cuentaBancaria.[${index}].alias`}
                    name={`cuentaBancaria[${index}].alias`}
                    value={fmk.values.cuentaBancaria?.alias}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.alias &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.alias)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.alias &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.alias
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Tipo de cuenta"
                    fullWidth
                    required
                    id={`cuentaBancaria.[${index}].tipo`}
                    name={`cuentaBancaria[${index}].tipo`}
                    value={fmk.values.cuentaBancaria?.tipo}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.tipo &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.tipo)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.tipo &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.tipo
                    }
                >
                    {tipoCuentas.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Moneda"
                    fullWidth
                    required
                    id={`cuentaBancaria.[${index}].moneda`}
                    name={`cuentaBancaria[${index}].moneda`}
                    value={fmk.values.cuentaBancaria?.moneda}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.moneda &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.moneda)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.moneda &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.moneda
                    }
                >
                    {monedas.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Número"
                    variant="outlined"
                    id={`cuentaBancaria.[${index}].numero`}
                    name={`cuentaBancaria[${index}].numero`}
                    value={fmk.values.cuentaBancaria?.numero}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.numero &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.numero)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.numero &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.numero
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    label="Uso"
                    fullWidth
                    required
                    id={`cuentaBancaria.[${index}].uso`}
                    name={`cuentaBancaria[${index}].uso`}
                    value={fmk.values.cuentaBancaria?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.uso &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.uso)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.uso &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.uso
                    }
                >
                    {usos.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Denominación"
                    variant="outlined"
                    id={`cuentaBancaria.[${index}].denominacion`}
                    name={`cuentaBancaria[${index}].denominacion`}
                    value={fmk.values.cuentaBancaria?.denominacion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.denominacion &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.denominacion)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.denominacion &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.denominacion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id={`cuentaBancaria.[${index}].notas`}
                    name={`cuentaBancaria[${index}].notas`}
                    value={fmk.values.cuentaBancaria?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.notas &&
                        fmk.errors.cuentaBancaria &&
                        Boolean(fmk.errors.cuentaBancaria[index]?.notas)
                    }
                    helperText={
                        fmk.touched.cuentaBancaria &&
                        fmk.touched.cuentaBancaria[index]?.notas &&
                        fmk.errors.cuentaBancaria &&
                        fmk.errors.cuentaBancaria[index]?.notas
                    }
                />
            </Grid>
        </>
    )
}
