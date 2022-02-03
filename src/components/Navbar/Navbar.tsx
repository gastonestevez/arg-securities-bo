import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Email, Instagram, Phone, Twitter } from "@mui/icons-material"

export function Navbar() {
    const theme = useTheme()
    const mobileBreak = useMediaQuery(theme.breakpoints.down('sm'))
    const styleLogo = {
        marginTop: 2,
        display: "flex",
        flexGrow: 1,
        maxWidth: "230px",
        height: "auto",
        justifyContent: mobileBreak ? 'center' : 'left'
    }

    const centerMobile = {
        display: "flex",
        justifyContent: 'center'
    }

    return (
        <>
            <Box>
                <div className="wraper_header_top">
                    <Container className="container">
                        <Grid container className="row header_top" spacing={2}>
                            <Grid sx={mobileBreak ? centerMobile : {}} item md={6} sm={8} xs={12}>
                                <div className="header_top_item text-left">
                                    <ul className="contact">
                                        <li className="phone">
                                            <a href="tel:+54 11 3988 2200">
                                                <Phone /> 
                                                <span>+54 11 3988 2200</span>
                                            </a>
                                        </li>
                                        <li className="email">
                                            <a href="mailto:info@argsecurities.com">
                                                <Email /> 
                                                <span>info@argsecurities.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid sx={mobileBreak ? centerMobile : {}} item md={6} sm={4} xs={12}>
                                <div className="header_top_item text-right">
                                    <ul className="social">
                                        <li className="twitter">
                                            <a href="https://twitter.com/argsecurities">
                                                <i>
                                                    <Instagram />
                                                </i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                            <a href="https://www.instagram.com/argsecurities">
                                                <i>
                                                    <Twitter />
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Box>
            <Container sx={mobileBreak ? styleLogo : {}}>
                <Box
                    sx={styleLogo}
                    className="banner-logo"
                >
                    <img
                        style={{
                            width: "100%",
                        }}
                        src="/logo.gif"
                        alt="image"
                    />

                    {/* <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Arg - Securities
                    </Typography>
                </Toolbar>
            </AppBar> */}
                </Box>
            </Container>
        </>
    )
}
