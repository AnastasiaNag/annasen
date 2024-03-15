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
        <button onClick={onOpen} className="btn btn__main h5">
          Make a reservation
        </button>
        <Modal open={open} onClose={onClose} onOpen={onOpen} />
      </div>
    </div>
  );
};

export default MainSection;
