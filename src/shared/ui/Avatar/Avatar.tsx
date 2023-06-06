import type { FC } from 'react';
import './Avatar.scss';

interface IAvatarProps {
  image: string;
  alt: string;
  className?: string;
  width?: number;
}

const Avatar: FC<IAvatarProps> = ({
  className = '',
  image,
  alt,
  width = 64,
}) => {
  return (
    <div className={`avatar ${className}`}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
