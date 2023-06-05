import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({
  children,
  inverse,
  danger,
  href,
  size = 'default', // 'small' | 'big' | 'default'
  type, // 'button' | 'submit' | 'reset'
  to,
  exact, // true | false
  onClick,
  disabled = false,
  elemStyles = 'button', // 'button' | 'link'
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
      <Link to={to} exact={exact} className={`${classes.join(' ')}`}>
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
