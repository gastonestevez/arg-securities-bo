import {
    Grid,
    TextField,
    MenuItem,
    Typography,
    IconButton,
    Box,
} from "@mui/material"
import React from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export const DomicilioUrbano = ({ index, fmk, arrayHelper }) => {
    const tiposDeuso = ["Legal", "Fiscal", "Real"]
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
                        Domicilio {`${index + 1}`}
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
                    label="Uso"
                    fullWidth
                    required
                    id={`domiciliosUrbanos.[${index}].uso`}
                    name={`domiciliosUrbanos[${index}].uso`}
                    value={fmk.values.domiciliosUrbanos[index]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.uso &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.uso)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.uso &&
                        fmk.errors.domiciliosUrbanos[index]?.uso
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
                    label="Barrio"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].barrio`}
                    name={`domiciliosUrbanos[${index}].barrio`}
                    value={fmk.values.domiciliosUrbanos[index]?.barrio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.barrio &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.barrio)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.barrio &&
                        fmk.errors.domiciliosUrbanos[index]?.barrio
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Calle"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].calle`}
                    name={`domiciliosUrbanos[${index}].calle`}
                    value={fmk.values.domiciliosUrbanos[index]?.calle}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.calle &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.calle)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.calle &&
                        fmk.errors.domiciliosUrbanos[index]?.calle
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Número"
                    variant="outlined"
                    type={"number"}
                    id={`domiciliosUrbanos.[${index}].numero`}
                    name={`domiciliosUrbanos[${index}].numero`}
                    value={fmk.values.domiciliosUrbanos[index]?.numero}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.numero &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.numero)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.numero &&
                        fmk.errors.domiciliosUrbanos[index]?.numero
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Torre"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].torre`}
                    name={`domiciliosUrbanos[${index}].torre`}
                    value={fmk.values.domiciliosUrbanos[index]?.torre}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.torre &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.torre)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.torre &&
                        fmk.errors.domiciliosUrbanos[index]?.torre
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Piso"
                    variant="outlined"
                    type={"number"}
                    id={`domiciliosUrbanos.[${index}].piso`}
                    name={`domiciliosUrbanos[${index}].piso`}
                    value={fmk.values.domiciliosUrbanos[index]?.piso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.piso &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.piso)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.piso &&
                        fmk.errors.domiciliosUrbanos[index]?.piso
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].departamento`}
                    name={`domiciliosUrbanos[${index}].departamento`}
                    value={fmk.values.domiciliosUrbanos[index]?.departamento}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.departamento &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.departamento)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.departamento &&
                        fmk.errors.domiciliosUrbanos[index]?.departamento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].lugar`}
                    name={`domiciliosUrbanos[${index}].lugar`}
                    value={fmk.values.domiciliosUrbanos[index]?.lugar}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.lugar &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.lugar)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.lugar &&
                        fmk.errors.domiciliosUrbanos[index]?.lugar
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Código postal"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].codigoPostal`}
                    name={`domiciliosUrbanos[${index}].codigoPostal`}
                    value={fmk.values.domiciliosUrbanos[index]?.codigoPostal}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.codigoPostal &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.codigoPostal)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.codigoPostal &&
                        fmk.errors.domiciliosUrbanos[index]?.codigoPostal
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id={`domiciliosUrbanos.[${index}].notas`}
                    name={`domiciliosUrbanos[${index}].notas`}
                    value={fmk.values.domiciliosUrbanos[index]?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.notas &&
                        Boolean(fmk.errors.domiciliosUrbanos[index]?.notas)
                    }
                    helperText={
                        fmk.touched.domiciliosUrbanos &&
                        fmk.touched.domiciliosUrbanos[index]?.notas &&
                        fmk.errors.domiciliosUrbanos[index]?.notas
                    }
                />
            </Grid>
        </>
    )
}
