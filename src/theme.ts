import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"

export const theme = createTheme({
    palette: {
        primary: {
            main: "#11abd2",
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: "#f50057",
        },
        success: {
            main: "#41bbd8",
        },
    },
    typography: {
        h1: {
            fontFamily: "Open Sans",
        },
    },
})


