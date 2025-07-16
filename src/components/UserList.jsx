import { useState } from "react";
import mockUsers from "../data/mock-data.js";
import UserCard from "./UserCard.jsx";

const UserList = () => {
  const [users, setUsers] = useState(mockUsers);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
