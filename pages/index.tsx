import {Container} from '@mui/material';
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header/>
            <Container sx={{
                display: 'grid',
                placeItems: 'center',
                width: '100vw',
                height: '100vh',
            }}>
                Hello World
            </Container>
        </>
    )
}

export default Home;
