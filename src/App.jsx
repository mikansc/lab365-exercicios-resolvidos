import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import User from "./components/User";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <User />
      <ShoppingList />
    </div>
  );
}

export default App;
