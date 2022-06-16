import React from 'react'
import {AppBar, Toolbar, styled } from '@mui/material'; 
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-color: rgba(0, 0, 0, 0.911);
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin:20px;
    text-decoration:none;
    color:white;

`

const Navbar =()=>{
    return(
     <Header position='static' >
         <Toolbar>
        <Tabs to='/'>LUCKY</Tabs>
        <Tabs to='/all'>Dashboard</Tabs>
        <Tabs to='/add'>Add user</Tabs>
         </Toolbar>
     </Header>
    ) 
}
export default Navbar;