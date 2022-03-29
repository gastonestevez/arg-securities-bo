import React, { useState } from "react"
import { Box, Grid, IconButton, Typography } from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import PersonaRelacionada from "./PersonaRelacionada/PersonaRelacionada"
export const PersonasRelacionadas = () => {
    const [forms, setForms] = useState([])

    const remove = (index) => {
        console.log(index)
    }

    const add = () => {
        setForms ([...forms, forms.length+1 ])
    }


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
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>

            {
                forms.map((f,i) => {
                    return (
                        <PersonaRelacionada index={i} onClickRemove={(index: number) => remove(index)}/>
                    )
                })
            }
        </>
    )
}
