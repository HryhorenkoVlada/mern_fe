import type { FC, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

import ModalOverlay from './ModalOverlay';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

interface IModalProps {
  show: boolean;
  onCencel: () => void;
  className?: string;
  headerClass?: string;
  footerClass?: string;
  contentClass?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  show,
  onCencel,
  ...modalProps
}) => {
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
