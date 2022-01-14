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
                    id={`domicilioUrbano.[${index}].uso`}
                    name={`domicilioUrbano[${index}].uso`}
                    value={fmk.values.domicilioUrbano[index]?.uso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.uso &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.uso)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.uso &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.uso
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
                    id={`domicilioUrbano.[${index}].barrio`}
                    name={`domicilioUrbano[${index}].barrio`}
                    value={fmk.values.domicilioUrbano[index]?.barrio}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.barrio &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.barrio)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.barrio &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.barrio
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Calle"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].calle`}
                    name={`domicilioUrbano[${index}].calle`}
                    value={fmk.values.domicilioUrbano[index]?.calle}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.calle &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.calle)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.calle &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.calle
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
                    id={`domicilioUrbano.[${index}].numero`}
                    name={`domicilioUrbano[${index}].numero`}
                    value={fmk.values.domicilioUrbano[index]?.numero}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.numero &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.numero)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.numero &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.numero
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Torre"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].torre`}
                    name={`domicilioUrbano[${index}].torre`}
                    value={fmk.values.domicilioUrbano[index]?.torre}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.torre &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.torre)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.torre &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.torre
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Piso"
                    variant="outlined"
                    type={"number"}
                    id={`domicilioUrbano.[${index}].piso`}
                    name={`domicilioUrbano[${index}].piso`}
                    value={fmk.values.domicilioUrbano[index]?.piso}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.piso &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.piso)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.piso &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.piso
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Departamento"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].departamento`}
                    name={`domicilioUrbano[${index}].departamento`}
                    value={fmk.values.domicilioUrbano[index]?.departamento}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.departamento &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.departamento)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.departamento &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.departamento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Lugar"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].lugar`}
                    name={`domicilioUrbano[${index}].lugar`}
                    value={fmk.values.domicilioUrbano[index]?.lugar}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.lugar &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.lugar)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.lugar &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.lugar
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Código postal"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].codigoPostal`}
                    name={`domicilioUrbano[${index}].codigoPostal`}
                    value={fmk.values.domicilioUrbano[index]?.codigoPostal}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.codigoPostal &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.codigoPostal)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.codigoPostal &&
                        fmk.errors.domicilioUrbano&&
                        fmk.errors.domicilioUrbano[index]?.codigoPostal
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Notas"
                    variant="outlined"
                    id={`domicilioUrbano.[${index}].notas`}
                    name={`domicilioUrbano[${index}].notas`}
                    value={fmk.values.domicilioUrbano[index]?.notas}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.notas &&
                        fmk.errors.domicilioUrbano &&
                        Boolean(fmk.errors.domicilioUrbano[index]?.notas)
                    }
                    helperText={
                        fmk.touched.domicilioUrbano &&
                        fmk.touched.domicilioUrbano[index]?.notas &&
                        fmk.errors.domicilioUrbano &&
                        fmk.errors.domicilioUrbano[index]?.notas
                    }
                />
            </Grid>
        </>
    )
}
