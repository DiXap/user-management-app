import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserAddButton from "./components/UserAddButton";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <UserAddButton className="w-full" />
      <UserForm />
      <UserList />
    </UserProvider>
  );
}

export default App;
