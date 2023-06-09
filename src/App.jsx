import Button from "./components/Button";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TextInput from "./components/TextInput";
import User from "./components/User";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <User />
      <TextInput
        label="Nome do Produto"
        id="nome_produto"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button label="Adicionar" onClick={() => console.log("clicou")} />
      <ShoppingList items={produtos} />
    </div>
  );
}

export default App;
