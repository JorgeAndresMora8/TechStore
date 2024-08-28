import { createContext, useState, useEffect, useContext } from 'react'
import { getFromLocalStorage, setAndPersistLocalStorage } from "../helpers/LocalStorageActions"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage('cartItems') ? getFromLocalStorage('cartItems') : [])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );

    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item) => {

    if (item.quantity === 1) {
      const updatedList = cartItems.filter((cartItem) => cartItem.id !== item.id)
      setCartItems(updatedList);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect( () => localStorage.setItem("cartItems", JSON.stringify(cartItems)), [cartItems]);


  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }

    // getFromLocalStorage("cartItems") ? && 
  }, []);

  const removeOneFromCart = (productId) => { 
    const listUpdated = cartItems.filter((product) => product.id !== productId)
    setCartItems(listUpdated)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        removeOneFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function CartContextProvider(){ 
  return useContext(CartContext)
}