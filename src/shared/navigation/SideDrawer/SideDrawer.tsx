import { PropsWithChildren, useRef } from 'react';
import type { FC } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.scss';

interface ISideDrawerProps {
  show: boolean;
  onClick: () => void;
}

const SideDrawer: FC<PropsWithChildren<ISideDrawerProps>> = ({
  children,
  show,
  onClick,
}) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={show}
      timeout={500}
      classNames="slide-in-left"
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer')!);
};

export default SideDrawer;
