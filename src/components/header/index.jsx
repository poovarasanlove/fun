import { Box, Container } from "@mui/material"
import styles from './style.module.scss'
const Header = () => {
    return(
        <header className={styles.header}>
            <Container>
                 <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                    <img src="https://avatars.githubusercontent.com/u/43699854?v=4" alt="logo" style={{height: 75, width: 75, borderRadius: 75}} />
                    <nav>
                        <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                    </nav>
                 </div>
            </Container>
        </header>
    )
}

export default Header