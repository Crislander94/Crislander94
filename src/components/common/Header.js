import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import MessageWelcome from './MessageWelcome';


import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElProductNav, setAnchorElProductNav] = useState(null);
    const [anchorElSellNav, setAnchorElSellNav] = useState(null);

    const pages = [
        {id: '1',url:'/' ,name: 'Home'},
        {
            id: '2',
            url:'/addProduct',
            name: 'Add Product',
            handleOpenProductMenu(event){
                setAnchorElProductNav(event.currentTarget);
            },
            handleCloseProductMenu(){
                setAnchorElProductNav(null);
            },
            anchorState : anchorElProductNav
        },
        {
            id: '3',
            url:'/addSell',
            name: 'Add Sell',
            handleOpenSellMenu(event){
                setAnchorElSellNav(event.currentTarget);
            },
            handleCloseSellMenu(){
                setAnchorElSellNav(null);
            },
            anchorState: anchorElSellNav
        },
        {id: '4',url:'/example' ,name: 'Example'}
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <>
            <Containerlink>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu bar inventory"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <NavLink to={page.url}>{page.name}</NavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                   
                    {pages.map((page) => (
                        // <Menu
                        //     id= {`menu-appbaxr${page.id}` }
                        //     anchorEl={anchorElNav}
                        //     anchorOrigin={{
                        //         vertical: 'bottom',
                        //         horizontal: 'left',
                        //     }}
                        //     keepMounted
                        //     transformOrigin={{
                        //         vertical: 'top',
                        //         horizontal: 'left',
                        //     }}
                        //     open={Boolean(anchorElNav)}
                        //     onClose={handleCloseNavMenu}
                        // >
                        //     {pages.map((pagex) => (
                        //         <MenuItem key={pagex} onClick={handleCloseNavMenu}>
                        //             <NavLink to={pagex.url}>{page.name}</NavLink>
                        //         </MenuItem>
                        //     ))}
                        // </Menu>
                        <Button
                            key={page.name}
                            onClick={handleCloseNavMenu}
                            aria-controls={`menu-appbaxr${page.id}` }
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink to={page.url}>{page.name}</NavLink>
                        </Button>
                    ))}
                </Box>
            </Containerlink>
            <MessageWelcome />
        </>
    )
}

const Containerlink = styled.header`
    width: 100%;
    margin: auto;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4B02A;
    font-size: 20px;
    font-style: bold;
    a{
        margin-right: 20px;
        color: white;
        transition: color .2s ease;
        &:hover{
            color: #D6D6D6;
        }
    }
`;

export default Header;