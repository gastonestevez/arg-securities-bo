import { Button, Container, CssBaseline, Grid, Typography } from "@mui/material"
import React, { useEffect } from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from "next/router";
import {  useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/store";
import { resetForm, toggleCompletedForm } from "../InscriptionForm/completedFormSlice";

export const SuccessForm = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { completed } = useSelector((state: AppState) => state.completedForm)
    useEffect(() => {
        if(!completed) {
            router.back()
        }
    }, [])
    console.log(completed);

    const handleGoHome = () => {
        dispatch(toggleCompletedForm())
        router.push('https://www.argsecurities.com')
    }

    return (
        <>
        <CssBaseline />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} />
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                        <CheckCircleIcon fontSize={'large'} color={'success'} />
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                        <Typography
                            variant="h4"
                        >
                            Registro completado con éxito.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                        <Button onClick={handleGoHome} variant="contained">
                            Volver a la página principal
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
