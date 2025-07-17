import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./contexts/UserContext";
import Toolbar from "./components/Toolbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Toolbar />
      <UserForm />
      <UserList />
    </UserProvider>
  );
}

export default App;
