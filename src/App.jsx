import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <UserForm />
      <UserList />
    </UserProvider>
  );
}

export default App;
