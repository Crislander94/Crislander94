import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import MessageWelcome from './MessageWelcome';
import './main.css';


const Header = () => {
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElProductNav, setAnchorElProductNav] = useState(null);
    const [anchorElSaleNav, setAnchorElSaleNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    //SUB MENU OPEN
    const handleOpenSubMenuByName = (event, name) => {
        switch (name) {
            case 'Product':
                setAnchorElProductNav(event.currentTarget);
                break;
            case 'Sale':
                setAnchorElSaleNav(event.currentTarget);
                break;
            default:
                console.log('Not found')
                break;
        }
    }
    //SUB MENU CLOSE
    const handleCloseSubMenuByName = (event, name) => {
        switch (name) {
            case 'Product':
                setAnchorElProductNav(null);
                break;
            case 'Sale':
                setAnchorElSaleNav(null);
                break;
            default:
                console.log('Not found item')
                break;
        }
    }
    const pages = [
        {id: '1',url:'/' ,name: 'Home',children: []},
        {
            id: '2',
            url:'',
            name: 'Product',
            anchorState : anchorElProductNav,
            children: [
                {id: 'sp1',url:'/addProduct' ,name: 'Add Product'}
            ]
        },
        {
            id: '3',
            url:'',
            name: 'Sale',
            anchorState: anchorElSaleNav,
            children: [
                {id: 'ss1',url:'/sale' ,name: 'Sales'},
                {id: 'ss2',url:'/addSale' ,name: 'Add Sale'}
            ]
        },
        {id: '4',url:'/example' ,name: 'Example',children: []}
    ];

    

    return(
        <>
            <ContainerMenu>
                {/* MENU RESPONSIVE */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu bar inventory"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{color: '#f2f2f2'}}
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
                            display: { xs: 'block', md: 'none'},
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name}  onClick={handleCloseNavMenu}>
                                <NavLink to={page.url} >{page.name}</NavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>


                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                   
                    {pages.map((page) =>
                        (page.children.length === 0) ?
                            //SIN SUBMENU
                            (<Button
                                key={page.id}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to={page.url}>{page.name}</NavLink>
                            </Button>)
                            :
                            //CON SUBMENU
                            (<React.Fragment key={page.id}>
                                <Button
                                    
                                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: '600' }}
                                    aria-label="menu bar inventory"
                                    aria-controls={`${page.name}-${page.id}`}
                                    aria-haspopup="true"
                                    onClick={(e) => handleOpenSubMenuByName(e ,page.name)}
                                >
                                    {page.name}
                                    {/* <NavLink to={page.url}>{page.name}</NavLink> */}
                                </Button>
                                <Menu
                                    id={`${page.name}-${page.id}`}
                                    anchorEl={page.anchorState}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(page.anchorState)}
                                    onClose={(e) => handleCloseSubMenuByName(e, page.name)}
                                    sx={{
                                        display: { xs: 'none', md: 'block'}
                                    }}
                                >
                                    {page.children.length > 0 &&
                                        page.children.map((child) => (
                                            <MenuItem 
                                                key={child.name}  
                                                onClick={(e) => handleCloseSubMenuByName(e, page.name)}
                                                sx={{background: '#F4B02A', ":hover":{background: '#F4B02A'}}}
                                            >
                                                <NavLink to={child.url} >{child.name}</NavLink>
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>
                            </React.Fragment>)
                        )
                    }
                </Box>
            </ContainerMenu>
            <MessageWelcome />
        </>
    )
}

const ContainerMenu = styled.header`
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