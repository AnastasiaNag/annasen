import { Dialog } from "@mui/material";
import './Modal.scss'

const Modal = ({ open, onOpen, onClose } : any) => {
    return (  
        <Dialog className="header__modal modal" open={open} onClose={onClose}>
        <div className="header__modal__wrap modal__wrap">
            <div className="header__modal__wrap__title modal__wrap__title h4">Contact us for marketing solutions!</div>
            <div className="header__modal__wrap__contacts modal__wrap__contacts">
                <a href="https://wa.me/+420776285070">
                    <button className="header__menu-btn__contact modal__wrap__contacts__btn btn__wa btn__contact" onClick={onOpen}>
                        Contact via WhatsApp
                    </button>{' '}
                </a>
                <a href="https://t.me/+420776285070">
                    <button className="header__menu-btn__contact modal__wrap__contacts__btn btn__tg btn__contact" onClick={onOpen}>
                        Contact via Telegram
                    </button>
                </a>
                <a href="mailto:senchurinaa@gmail.com">
                    <button className="header__menu-btn__contact modal__wrap__contacts__btn btn__mail btn__contact" onClick={onOpen}>
                        Contact via E-mail
                    </button>
                </a>
                <div className="header__modal__wrap__text modal__wrap__text h5">---- or ----</div>
                <a href="tel+420776285070">
                    <button className="header__menu-btn__contact modal__wrap__contacts__btn btn__phone btn__contact" onClick={onOpen}>
                        Call us: +420 776 285 070
                    </button>
                </a>
            </div>
        </div>
    </Dialog>
    );
}
 
export default Modal;