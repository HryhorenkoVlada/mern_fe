import type { FC } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

interface IBackdropProps {
  onClick: () => void;
}

const Backdrop: FC<IBackdropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById('backdrop-hook')!
  );
};

export default Backdrop;
