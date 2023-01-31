import { Container } from "@mui/material"
import Footer from "../components/footer"
import Header from "../components/header"

const MainLayout = ({children}) => {
    return (
        <main>
            <Header />
            <Container style={{height: '100vh'}}>
                {children}
            </Container>
            <Footer />
        </main>
    )
}

export default MainLayout;