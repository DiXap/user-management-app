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

  const addUser = useCallback((newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const deleteUser = useCallback((userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  });

  const value = useMemo(() => ({ users, addUser, deleteUser }), [users, addUser, deleteUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
