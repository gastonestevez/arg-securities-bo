import React, { useState } from "react"
import {
    Box,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import PersonaRelacionada from "./PersonaRelacionada/PersonaRelacionada"
import { personaRelacionadaInitialValues } from "../../form/initialValues"
import { useAppDispatch } from "../../app/hooks"
import {
    addPersonas,
    onChangePersonas,
    removePersonas,
    onChangeRelacion,
} from "./personasRelacionadasSlice"
export const PersonasRelacionadas = () => {
    const dispatch = useAppDispatch()
    const [forms, setForms] = useState([])
    const [tipo, setTipo] = useState("")
    const tiposDeRelaciones = [
        "Condómino",
        "Firmante",
        "Autorizado",
        "Beneficiario",
        "Apoderado",
    ]
    const remove = (index) => {
        const filteredForms = forms.filter((f) => f.index !== index)
        setForms(filteredForms)
        dispatch(removePersonas({ index }))
    }

    const add = () => {
        setForms([
            ...forms,
            { index: forms.length, ...personaRelacionadaInitialValues },
        ])
        dispatch(
            addPersonas({
                index: forms.length,
                ...personaRelacionadaInitialValues,
            })
        )
    }

    const onChange = (f, index: number) => {
        const filteredForms = forms.filter((f) => f.index !== index)
        setForms([...filteredForms, { ...f, index }])
        dispatch(onChangePersonas({ ...f, index }))
    }
    const onChangeTipo = (e, index: number) => {
        dispatch(onChangeRelacion({tipo: e.target.value, index}))
        setTipo(e.target.value)
    }
    console.log(forms)
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography component="h5" variant="h5">
                            Titulares
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton
                            onClick={() => add()}
                            color="primary"
                            aria-label="delete"
                            disabled={forms.length === 2}
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>

            {forms.map((f, i) => {
                return (
                    <>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="personaRelacionada.tipo"
                                name="personaRelacionada.tipoID"
                                select
                                defaultValue={""}
                                label="Tipo de relación"
                                value={tipo}
                                onChange={(e) => onChangeTipo(e, i)}
                                fullWidth
                                required
                            >
                                {tiposDeRelaciones.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} />
                        <PersonaRelacionada
                            index={i}
                            onClickRemove={(index: number) => remove(index)}
                            onChange={(p, index: number) => onChange(p, index)}
                        />
                    </>
                )
            })}
        </>
    )
}
