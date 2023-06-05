import ReactDOM from 'react-dom';

const ModalOverlay = ({
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
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default ModalOverlay;
