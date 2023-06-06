import type { FC } from 'react';

import { Card } from 'src/shared/ui';
import { IUser } from 'src/types/interfaces/user';
import UserItem from '../UserItem/UserItem';

import './UsersList.scss';

interface IUsersListProps {
  usersList: IUser[];
}

const UsersList: FC<IUsersListProps> = ({ usersList }) => {
  return (
    <ul className="users-list">
      {[usersList]?.length ? (
        usersList.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placesCount={user.places}
          />
        ))
      ) : (
        <Card>
          <h2 className="center">No users found.</h2>
        </Card>
      )}
    </ul>
  );
};

export default UsersList;
