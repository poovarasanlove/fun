import { Container, Grid } from "@mui/material"

const Footer = () => {
    return(
        <footer>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={4}>
                        <img src="https://avatars.githubusercontent.com/u/43699854?v=4" alt="logo" height={220} width={220} style={{borderRadius: 220}} />
                    </Grid>
                    <Grid item sm={4}>
                        <ul>
                            <li>About</li>
                        </ul>
                    </Grid>
                    <Grid item sm={4}>
                        <ul>
                            <li>Contact</li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;