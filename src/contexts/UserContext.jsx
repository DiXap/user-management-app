import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import mockUsers from "../data/mock-data";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);
  const [userToUpdate, setUserToUpdate] = useState(null);

  const addUser = useCallback((newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const deleteUser = useCallback((userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  });

  const updateUser = useCallback((updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  });

  const dropUserToUpdate = useCallback(() => {
    setUserToUpdate(null);
    console.log("Dropping...");
  });

  const value = useMemo(
    () => ({
      users,
      addUser,
      deleteUser,
      updateUser,
      userToUpdate,
      setUserToUpdate,
      dropUserToUpdate,
    }),
    [
      users,
      addUser,
      deleteUser,
      updateUser,
      userToUpdate,
      setUserToUpdate,
      dropUserToUpdate,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
