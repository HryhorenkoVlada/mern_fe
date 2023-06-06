import { PropsWithChildren } from 'react';
import type { FC } from 'react';
import ReactDOM from 'react-dom';

interface IModalOverlayProps {
  className?: string;
  headerClass?: string;
  footerClass?: string;
  contentClass?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ModalOverlay: FC<PropsWithChildren<IModalOverlayProps>> = ({
  className,
  children,
  headerClass = '',
  footerClass = '',
  contentClass = '',
  header,
  footer,
  onSubmit,
}) => {
  const content = (
    <div className={`modal ${className}`}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        {footer && (
          <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
        )}
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook')!);
};

export default ModalOverlay;
