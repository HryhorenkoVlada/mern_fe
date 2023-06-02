import React from 'react';
import { CSSTransition } from 'react-transition-group';

import ModalOverlay from './ModalOverlay';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const Modal = (props) => {
  const { show, onCencel, ...modalProps } = props;
  return (
    <>
      {show && <Backdrop onClick={onCencel} />}
      <CSSTransition
        in={show}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...modalProps} />
      </CSSTransition>
    </>
  );
};

export default Modal;
