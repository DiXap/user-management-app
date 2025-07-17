import { UserRoundPlus } from "lucide-react";
import { useUserContext } from "../contexts/UserContext";
import clsx from "clsx";

const AddUserButton = ({ iconSize, iconColor, className }) => {
  const { openForm } = useUserContext();

  return (
    <button onClick={openForm} className={clsx(className)}>
      <UserRoundPlus size={iconSize} color={iconColor} className="w-full" />
    </button>
  );
};

export default AddUserButton;
