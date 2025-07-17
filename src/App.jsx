import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./contexts/UserContext";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <UserProvider>
      <Toolbar />
      <UserForm />
      <UserList />
    </UserProvider>
  );
}

export default App;
