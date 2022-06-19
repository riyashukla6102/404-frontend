import React from 'react'
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import { useState } from "react";
import { IconContext } from 'react-icons';

import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    MenuItem,
    
    Menu,
    MenuItemBtn,
    MenuLinkBtn,
    MenuLink

} from './NavbarElements';
const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}> 
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            
                            Dolat Capital
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            {/* <MenuItem>
                                <MenuLink to="/">Logout</MenuLink>
                            </MenuItem> */}
                            <MenuItem>
                                <MenuLink to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink to="/recipe">Help/Query</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {Button?(
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary>Log Out</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont>Log Out</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;