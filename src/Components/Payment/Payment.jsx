import { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import { useSelector } from "react-redux";
import PaymentForm from "./status/components/PaymentForm";
import SuccessStatus from "./status/success/SuccessStatus";
import { MakePaymentService } from "../../Service/PaymentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function ErrorMesage() {
  return (
    <div className="payment-error-message">
      <b>There was an error</b>
    </div>
  );
}

export default function Payment() {
  //CONTEXT
  const { clearCart, cartItems, getCartTotal } = useContext(CartContext);

  const auth = useSelector((state) => state.auth);

  const [finish, setFinish] = useState(false);
  const [error, setError] = useState(false);

  async function HandlePayment() {
    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString();

    const paymentObj = {
      email: auth.email,
      products: cartItems,
      total: getCartTotal(),
      date: localDate,
    };

    // try {
    const response = await MakePaymentService(paymentObj);
    if (!response) {
      setError(true);
    } else {
      clearCart();
      setFinish(true);
      setError(false)
    }
  }

  return (
    <div className="paymentFormContainer">
      {error && <ErrorMesage />}
      {!finish && (
        <PaymentForm
          cartItems={cartItems}
          getCartTotal={getCartTotal()}
          HandlePayment={HandlePayment}
        />
      )}
      {finish && <SuccessStatus />}
    </div>
  );
}
