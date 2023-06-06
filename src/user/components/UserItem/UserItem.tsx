import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card } from 'src/shared/ui';

import './UserItem.scss';

interface IUserItemProps {
  id: string;
  image: string;
  name: string;
  placesCount: number;
}

const UserItem: FC<IUserItemProps> = ({ id, image, name, placesCount }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placesCount} {placesCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
