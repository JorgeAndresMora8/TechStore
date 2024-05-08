import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    console.log(item)

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
      console.log('el product ya esta en el carrito')
    } else {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  const removeFromCart = (item) => {

    // const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    // console.log(isItemInCart)

    if (item.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const removeOneFromCart = (productId) => { 
    setCartItems(cartItems.filter((product) => product.id !== productId))
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