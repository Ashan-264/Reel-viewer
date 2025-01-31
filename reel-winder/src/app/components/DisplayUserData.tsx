import { useEffect, useState } from "react";
import React from "react";
import { fetchUsers } from "@/services/userService";
import { User } from "@/types/database";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const userList = await fetchUsers();
      setUsers(userList);
    };

    loadUsers();
  }, []);

  if (!users)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
