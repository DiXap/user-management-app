import { Eraser, Pencil } from "lucide-react";
import { PropTypes } from "prop-types";
import { useUserContext } from "../contexts/UserContext";

const UserCard = ({ id, name, email }) => {
  const { deleteUser, setUserToUpdate, openForm } = useUserContext();
  const handleDelete = () => {
    deleteUser(id);
    console.log(`User ${id} deleted`);
  };

  const handleEdit = () => {
    openForm();
    setUserToUpdate({ id, name, email });
    console.log(`Editing User ${id}`);
  };

  return (
    <div className="my-3 p-5 rounded-lg max-w-[240px] shadow-xl">
      <div className="">
        <img
          className="rounded-2xl border"
          src="https://robohash.org/0DU.png?set=set4"
          alt="User pic"
        />
      </div>
      <div className="mt-7 text-center overflow-x-clip">
        <h2 className="text-2xl text-ellipsis">{name}</h2>
        <p className="text-sm text-slate-600">{email}</p>
      </div>
      <div className="flex justify-between gap-2 mt-7">
        <button className="w-full p-1.5 bg-red-600 rounded-md">
          <Eraser size={20} className="w-full" onClick={handleDelete} />
        </button>
        <button
          className="w-full p-1.5 bg-blue-500 rounded-md"
          onClick={handleEdit}
        >
          <Pencil size={20} className="w-full" />
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;
