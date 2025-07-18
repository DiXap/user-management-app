import { useUserContext } from "../contexts/UserContext.jsx";
import UserCard from "./UserCard.jsx";

const UserList = () => {
  const { users } = useUserContext();

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
