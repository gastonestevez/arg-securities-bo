import {
    Alert,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
} from "@mui/material"
import React from "react"
import { terms } from "./terms"
import { TermsAndCondition } from "./TermsAndCondition"

export const TermsAndConditionsContainer = ({ fmk }) => {
    return (
        <>
            <Grid item xs={12} sm={12}>
                <Typography component="h5" variant="h5">
                    Términos y condiciones
                </Typography>
            </Grid>
            {terms.map((t) => {
                return (
                    <Grid item xs={12}>
                        <TermsAndCondition
                            title={t.title}
                            paragraph={t.paragraph}
                        />
                    </Grid>
                )
            })}
            <Grid item xs={12}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id={"terminosCondiciones"}
                                name={"terminosCondiciones"}
                                onChange={fmk.handleChange}
                                value={fmk.values.terminosCondiciones}
                            />
                        }
                        label="Aceptar todos los términos y condiciones"
                    />
                </FormGroup>
            </Grid>
            {fmk.errors.terminosCondiciones && (
                <Grid item xs={12}>
                    <Alert severity="error" variant="outlined">
                        {fmk.errors.terminosCondiciones}
                    </Alert>
                </Grid>
            )}
        </>
    )
}
