import React from 'react';

import UserItem from '../UserItem/UserItem';
import { Card } from '../../../shared/ui';

import './UsersList.scss';

const UsersList = ({ usersList }) => {
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
