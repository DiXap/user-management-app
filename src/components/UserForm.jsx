import { CircleSlash, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";

/**
 * Renders a form inside a modal to create or edit a user.
 * Automatically focuses the first input when opened and resets on cancel.
 * 
 * @returns {JSX.Element} The modal form for creating/editing users.
 */
const UserForm = () => {
  const {
    addUser,
    updateUser,
    userToUpdate,
    dropUserToUpdate,
    isFormOpen,
    closeForm,
  } = useUserContext();
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (userToUpdate) {
      setUserFormData({ name: userToUpdate.name, email: userToUpdate.email });
    } // TODO: Eval if reseting form state to null (here) would be better to reduce repeated code
  }, [userToUpdate, isFormOpen]);

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", handleEscKeyPress);

    return () => window.removeEventListener("keydown", handleEscKeyPress);
  }, [closeForm]);

  const handleOutClick = (event) => {
    if (event.target === event.currentTarget) closeForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email } = userFormData;

    const newUser = {
      name: name.trim(),
      email: email.trim(),
    };

    if (!userToUpdate) {
      addUser({ id: Date.now(), ...newUser });
      console.log("User saved:", newUser);
    } else {
      updateUser({ ...userToUpdate, ...newUser });
      dropUserToUpdate();
      console.log(`User ${userToUpdate.id} updated`, userFormData);
    }
    setUserFormData({ name: "", email: "" });
    closeForm();
  };

  const handleUpdateCancel = (event) => {
    closeForm();
    setUserFormData({ name: "", email: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isFormOpen) return null;

  return (
    <div
      className="h-full min-w-full container bg-slate-800/50 flex items-center justify-center fixed inset-0 z-50"
      role="button"
      onClick={handleOutClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleOutClick(e);
      }}
      tabIndex={0}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[90%] sm:w-[45%] rounded-lg p-6 shadow-2xl flex flex-col flex-wrap"
      >
        <div className="w-full mb-6">
          <img
            src="https://robohash.org/0DU.png?set=set4"
            alt="User pic"
            className="mx-auto rounded-full object-cover max-w-40 shadow-sm"
          />
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          <div className="w-full flex flex-col p-2">
            <label htmlFor="name" className="text-xs text-slate-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border-b"
              value={userFormData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              autoComplete="name"
              autoFocus
            />
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="email" className="text-xs text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border-b"
              value={userFormData.email}
              onChange={handleChange}
              placeholder="john.doe@mail.com"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div className="w-full mt-8 flex flex-wrap justify-between gap-1">
          <button
            type="button"
            className="w-full sm:w-[45%] mx-auto p-2 bg-red-600 rounded-lg"
            onClick={handleUpdateCancel}
          >
            <CircleSlash className="w-full" />
          </button>
          <button
            type="submit"
            className="w-full sm:w-[45%] mx-auto p-2 bg-emerald-500 rounded-lg"
          >
            <Save className="w-full" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
