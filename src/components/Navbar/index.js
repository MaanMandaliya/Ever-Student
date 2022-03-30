import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Nav';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    {/*<img src={'../../logo.svg'} alt='logo' />*/}
                </NavLink>
                <Bars />
                <NavMenu>
                    <span>
                        Online Learning Platform
                    </span>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
