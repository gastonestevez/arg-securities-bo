import { Alert, AlertTitle } from "@mui/material"
import React from "react"

export const Message = ({ type, title, message }) => {
    return (
        <>
            <Alert severity={type}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </>
    )
}
