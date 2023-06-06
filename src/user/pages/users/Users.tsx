import { UsersList } from 'src/user/components';
import { DUMMY_USERS } from 'src/utils/data/users';

const Users = () => {
  return <UsersList usersList={DUMMY_USERS} />;
};

export default Users;
