import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = (props) => {
  const classes = [];

  if (props.inverse) {
    classes.push('button--inverse');
  }

  if (props.danger) {
    classes.push('button--danger');
  }

  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${classes.join(
          ' '
        )}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${classes.join(
          ' '
        )}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${classes.join(
        ' '
      )}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
