import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
    padding: 20 px;
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    color: #FFFFFF;
    margin-right: 100px;
    text-decoration: none;
`;

const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;