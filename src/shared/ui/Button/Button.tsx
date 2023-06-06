import type { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface IButtonProps {
  inverse?: boolean;
  danger?: boolean;
  href?: string;
  size?: 'small' | 'big' | 'default';
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  elemStyles?: 'button' | 'link';
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  inverse,
  danger,
  href,
  size = 'default',
  type,
  to,
  onClick,
  disabled = false,
  elemStyles = 'button',
}) => {
  const classes = [`${elemStyles}`];

  if (inverse) {
    classes.push(`${elemStyles}--inverse`);
  }

  if (danger) {
    classes.push(`${elemStyles}--danger`);
  }

  if (size) {
    classes.push(`${elemStyles}--${size}`);
  } else {
    classes.push(`${elemStyles}--default`);
  }

  if (href) {
    return (
      <a className={`${classes.join(' ')}`} href={href}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={`${classes.join(' ')}`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.join(' ')}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
