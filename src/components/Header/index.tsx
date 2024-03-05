import { Button, IconButton, Dialog, TextField, dividerClasses, Tooltip, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import './Header.scss';
import React from 'react';
import Modal from '../Modal';

const Header = () => {
    const MenuItemList = ['About Us', 'Were are we?'];
    const [open, setOpen] = useState <Boolean>(false);

    const onOpen = () : void => {
        setOpen(true);
    };
    const onClose = () : void => {
        setOpen(false);
    };

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">LOGO</div>
                <div className="header__menu">
                    {MenuItemList.map(item => {
                        return (
                            <Button className="header__menu-btn" variant="contained">
                                {item}
                            </Button>
                        );
                    })}
                    <Button className="header__menu-btn__contact connect__btn__style" onClick={onOpen}>
                        Contact
                    </Button>
                    <Modal open={open} onClose={onClose} onOpen={onOpen} />
                </div>
            </div>
        </header>
    );
};

export default Header;
