import React from 'react';
import UserItem from './UserItem';
import useFetch from '../../shared/hooks/useFetch';

const Users = () => {
  const [userList, loading] = useFetch('User', 'GET');

  return (
    <div>
      {loading ? (
        <div>Loading.</div>
      ) : (
        <div className="container row">
          {userList.map((item) => (
            <UserItem key={item.id} user={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
