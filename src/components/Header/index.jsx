import { Button, IconButton, Dialog, TextField, dividerClasses, Tooltip, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import './Header.scss';

const Header = () => {
    const MenuItemList = ['Masseuses', 'Price', 'Photo', 'Contact'];
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">LOGO</div>
                <div className="header__menu">
                    {MenuItemList.map(item => {
                        return (
                            <Button className="header__menu-btn" item={item} variant="contained">
                                {item}
                            </Button>
                        );
                    })}
                    <Button className="header__menu-btn__contact" onClick={onOpen}>
                        Contact
                    </Button>

                    <Dialog className="header__modal modal" open={open} onClose={onClose}>
                        <div className="header__modal__wrap modal__wrap">
                            <div className="header__modal__wrap__title modal__wrap__title h4">Contact us and make a reservation!</div>
                            <div className="header__modal__wrap__contacts modal__wrap__contacts">
                                <a href="https://wa.me/79123456789?text=Привет! Я хочу задать вам вопрос.">
                                    <Button className="header__menu-btn__contact" onClick={onOpen}>
                                        Contact via WhatsApp
                                    </Button>{' '}
                                </a>
                                <a href="tg://resolve?domain=username">
                                    <Button className="header__menu-btn__contact" onClick={onOpen}>
                                        Contact via Telegram
                                    </Button>
                                </a>
                                <a href="mailto:vlad@webref.ru">
                                    <Button className="header__menu-btn__contact" onClick={onOpen}>
                                        Contact via E-mail
                                    </Button>
                                </a>
                                <div className="header__modal__wrap__text modal__wrap__text h5">---- or ----</div>
                                <a href="tel:+78142332211">
                                    <Button className="header__menu-btn__contact" onClick={onOpen}>
                                        Call us at: +7 814 233 22 11
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </header>
    );
};

export default Header;
