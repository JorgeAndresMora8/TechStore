export const createPaymentObj = (totalCart, date, email, cartItems) => { 
    const obj = {
      email: email,
      products: cartItems,
      total: totalCart,
      date: date
    }
  
    return obj
  }