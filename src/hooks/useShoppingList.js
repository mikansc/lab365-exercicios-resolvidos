import { useEffect, useState } from "react";

const produtos = ["Arroz", "Feijão", "Macarrão", "Carne", "Frango"];

function useShoppingList() {
  const [listaProdutos, setListaProdutos] = useState(produtos);
  const [produto, setProduto] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    const listaStorage = localStorage.getItem("list");
    if (listaStorage) {
      setListaProdutos(JSON.parse(listaStorage));
    }
  }, []);

  function handleProductName(event) {
    setProduto(event.target.value);
  }

  function addProduct() {
    if (produto !== "") {
      const listaAtualizada = [...listaProdutos, produto];
      localStorage.setItem("list", JSON.stringify(listaAtualizada));
      setListaProdutos(listaAtualizada);
      setProduto("");
    } else {
      setMensagemErro("Preencha o nome do produto");
    }
  }

  function validate() {
    if (produto === "") {
      setMensagemErro("Preencha o nome do produto");
    } else {
      setMensagemErro("");
    }
  }

  return {
    listaProdutos,
    produto,
    mensagemErro,
    handleProductName,
    addProduct,
    validate,
  };
}

export default useShoppingList;
