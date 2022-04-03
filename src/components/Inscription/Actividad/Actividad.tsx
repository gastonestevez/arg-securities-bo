import {
    Box,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import React, { useState } from "react"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import Message from "../../Message"

export const Actividad = ({ index, fmk, arrayHelper }) => {
    const [actualAct, setActualAct] = useState(undefined)
    const activities = [
        {
            title: "EMPRESARIO",
            value: "empresario",
            message: `Desarrolle una breve descripción de esta: rubro, país, localidad, tipo de actividad. Si su empresa es sujeto obligado en los términos de la ley 25.246, en el campo observaciones mencione antigüedad y mercado en el que opera, principales clientes, porcentaje de participación accionaria que Ud. posee. `,
        },
        {
            title: "PROFESIONAL INDEPENDIENTE / MONOTRIBUTISTA",
            value: "monotributista",
            message: `Desarrolle una breve descripción de su actividad: rubro en el que opera, profesión, antigüedad, etc.`,
        },
        {
            title: "EMPLEADO EN RELACIÓN DE DEPENDENCIA",
            value: "relacion",
            message: `Desarrolle una breve descripción de su actividad: nombre de la empresa, rubro de la empresa, antigüedad laboral, cargo que ocupa, etc.`,
        },
        {
            title: "JUBILADO",
            value: "jubilado",
            message: `Describa las actividades económicas desarrolladas en los últimos años. Ej: Empresa en la que trabajaba, cargo que ocupaba, nivel de ingreso que le generaba. `,
        },
        {
            title: "OTROS",
            value: "otros",
            message: undefined,
        },
    ]

    const handleActivityChange = (e) => {
        const val = activities.find(a => a.value === e.target.value)
        setActualAct(val)
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
                        {index === 0
                            ? "Ocupación actual"
                            : `Actividad secundaria`}
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
                    required
                    fullWidth
                    label="Tipo de actividad"
                    variant="outlined"
                    id={`actividadPersona.[${index}].actividad`}
                    name={`actividadPersona[${index}].actividad`}
                    value={fmk.values.actividadPersona[index]?.actividad}
                    onChange={(e) => handleActivityChange(e)}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.actividad &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.actividad)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.actividad &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.actividad
                    }
                >
                    {activities.map((option) => (
                        <MenuItem key={option.title} value={option.value}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Rubro"
                    variant="outlined"
                    id={`actividadPersona.[${index}].rubro`}
                    name={`actividadPersona[${index}].rubro`}
                    value={fmk.values.actividadPersona[index]?.rubro}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.rubro &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.rubro)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.rubro &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.rubro
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Antigüedad de puesto"
                    variant="outlined"
                    id={`actividadPersona.[${index}].departamento`}
                    name={`actividadPersona[${index}].departamento`}
                    value={fmk.values.actividadPersona[index]?.departamento}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.departamento &&
                        fmk.errors.actividadPersona &&
                        Boolean(
                            fmk.errors.actividadPersona[index]?.departamento
                        )
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.departamento &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.departamento
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Empresa"
                    required
                    variant="outlined"
                    id={`actividadPersona.[${index}].organizacion`}
                    name={`actividadPersona[${index}].organizacion`}
                    value={fmk.values.actividadPersona[index]?.organizacion}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.organizacion &&
                        fmk.errors.actividadPersona &&
                        Boolean(
                            fmk.errors.actividadPersona[index]?.organizacion
                        )
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.organizacion &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.organizacion
                    }
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Puesto"
                    required
                    variant="outlined"
                    id={`actividadPersona.[${index}].puesto`}
                    name={`actividadPersona[${index}].puesto`}
                    value={fmk.values.actividadPersona[index]?.puesto}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.puesto &&
                        fmk.errors.actividadPersona &&
                        Boolean(fmk.errors.actividadPersona[index]?.puesto)
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.puesto &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.puesto
                    }
                />
            </Grid>
            {!!actualAct?.message && (
                <Grid item xs={12}>
                    <Message
                        type={"info"}
                        title={"Aclaración"}
                        message={actualAct.message}
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Descripción"
                    variant="outlined"
                    id={`actividadPersona.[${index}].observaciones`}
                    name={`actividadPersona[${index}].observaciones`}
                    value={fmk.values.actividadPersona[index]?.observaciones}
                    onChange={fmk.handleChange}
                    error={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.observaciones &&
                        fmk.errors.actividadPersona &&
                        Boolean(
                            fmk.errors.actividadPersona[index]?.observaciones
                        )
                    }
                    helperText={
                        fmk.touched.actividadPersona &&
                        fmk.touched.actividadPersona[index]?.observaciones &&
                        fmk.errors.actividadPersona &&
                        fmk.errors.actividadPersona[index]?.observaciones
                    }
                />
            </Grid>
        </>
    )
}
