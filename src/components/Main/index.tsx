import { useState } from 'react';
import './Main.scss'
import { Button } from "@mui/material";
import Modal from '../Modal';

const MainSection = () => {
    const [open, setOpen] = useState <Boolean>(false);

    const onOpen = () : void => {
        setOpen(true);
    };
    const onClose = () : void => {
        setOpen(false);
    };
    return (  
        <div className='main-section section'>
            <div className="main__text">
                <Button onClick={onOpen} className='main-btn__contact btn__style'>Make a reservation</Button>
                <Modal open={open} onClose={onClose} onOpen={onOpen} />
            </div>
        </div>
    );
}
 
export default MainSection;