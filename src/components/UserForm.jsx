import { CircleSlash, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";

const UserForm = () => {
  const { addUser, updateUser, userToUpdate, dropUserToUpdate } =
    useUserContext();
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (userToUpdate) {
      setUserFormData({ name: userToUpdate.name, email: userToUpdate.email });
    }
  }, [userToUpdate]);

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
  };

  const handleUpdateCancel = (event) => {
    event.preventDefault();

    dropUserToUpdate();
    setUserFormData({ name: "", email: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-full min-w-full container bg-slate-800/50 flex items-center justify-center">
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
          {userToUpdate && (
            <button
              type="button"
              className="w-full sm:w-[45%] mx-auto p-2 bg-red-600 rounded-lg"
              onClick={handleUpdateCancel}
            >
              <CircleSlash className="w-full" />
            </button>
          )}
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
