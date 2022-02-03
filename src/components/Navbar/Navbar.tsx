import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Container, Grid } from "@mui/material"
import { Email, Instagram, Phone, Twitter } from "@mui/icons-material"

export function Navbar() {
    return (
        <>
            <Box>
                <div className="wraper_header_top">
                    <Container className="container">
                        <Grid container className="row header_top">
                            <Grid item md={6} sm={6} xs={12}>
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
                            <Grid item md={6} sm={6} xs={12}>
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
            <Container>
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexGrow: 1,
                        maxWidth: "230px",
                        height: "auto",
                    }}
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
