import { UserRoundPlus } from "lucide-react";
import { useUserContext } from "../contexts/UserContext";
import clsx from "clsx";

/**
 * Renders a button that fires the event to create a new User
 * 
 * @param {Object} props - Component's props 
 * @param {number} iconSize - Icon size
 * @param {String} iconColor - Icon color
 * @param {String} className - CSS clases for the component
 * @returns {JSX.Element} The button component to trigger the creation of an User
 */
const UserAddButton = ({ iconSize, iconColor, className }) => {
  const { openForm } = useUserContext();

  return (
    <button onClick={openForm} className={clsx(className)}>
      <UserRoundPlus size={iconSize} color={iconColor} className="w-full" />
    </button>
  );
};

export default UserAddButton;
