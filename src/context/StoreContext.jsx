import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [theme, setTheme] = useState("light")

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItem[itemId]) {
      setCartItem((prev) => {
        const updatedCart = { ...prev };
        if (updatedCart[itemId] > 1) {
          updatedCart[itemId] -= 1;
        } else {
          delete updatedCart[itemId];
        }
        return updatedCart;
      });
    }
  };

  const toggleTheme=()=>{
    setTheme((prev)=>(prev==="light"?"dark":"light"))
  }

   useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);


  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItem,
    theme,
    toggleTheme
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
