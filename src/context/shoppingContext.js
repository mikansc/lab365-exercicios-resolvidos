import { useContext, createContext } from "react";

export const ShoppingContext = createContext();

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
