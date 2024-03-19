import { useState } from 'react';
import './Main.scss';
import Modal from '../Modal';

const MainSection = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const onOpen = (): void => {
    setOpen(true);
  };
  const onClose = (): void => {
    setOpen(false);
  };
  return (
    <div className="main-section section">
      <div className="main__text">
        <div className='main-section__text h6'>
        Top quality erotic massages are a must have, but there are plenty of other reasons to give us a chance
        </div>
        <button onClick={onOpen} className="btn btn__main h5">
          Make a reservation
        </button>
        <Modal open={open} onClose={onClose} onOpen={onOpen} />
      </div>
    </div>
  );
};

export default MainSection;
