//create the context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    if (result && result?.products) {
      setListOfProducts(result?.products);
      setLoading(false);
    } else {
      setListOfProducts([]);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ listOfProducts, loading }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
