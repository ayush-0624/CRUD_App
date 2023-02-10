import { Box, Typography, styled } from '@mui/material';
import crud from '../Images/crud-app homepage.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 30px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '75%'
});

 const Home = () => {
    return(
        <Header>
            <Typography variant="h4">Welcome to CRUD App</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={crud} />
            </Box>
        </Header>
    )
 }

 export default Home;