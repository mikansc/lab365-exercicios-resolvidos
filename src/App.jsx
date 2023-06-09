import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import User from "./components/User";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <User />
      <ShoppingList items={produtos} />
    </div>
  );
}

export default App;
