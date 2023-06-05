import { UsersList } from '../../components';
import { DUMMY_USERS } from '../../../utils/data/users';

const Users = () => {
  return <UsersList usersList={DUMMY_USERS} />;
};

export default Users;
