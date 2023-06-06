import type { FC, PropsWithChildren } from 'react';

import './Card.scss';

interface ICardProps {
  className?: string;
}

const Card: FC<PropsWithChildren<ICardProps>> = ({
  className = '',
  children,
}) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
