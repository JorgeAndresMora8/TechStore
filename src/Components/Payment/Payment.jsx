import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { MakePaymentService } from "../../Service/PaymentService";
import { CartContext } from "../../context/context";
import { createPaymentObj } from "../../utilities/createPaymentObj";
import { ErrorMesage } from "./Components/ErrorMessage";
import PaymentForm from "./status/components/PaymentForm";
import SuccessStatus from "./status/success/SuccessStatus";
import { getDate } from "../../utilities/getDate";

export default function Payment() {
  //CONTEXT
  const { clearCart, cartItems, getCartTotal } = useContext(CartContext);

  const auth = useSelector((state) => state.auth);
  const [finish, setFinish] = useState(false);
  const [error, setError] = useState(false);

  async function HandlePayment() {
    
    const paymentObj = createPaymentObj(getCartTotal(), getDate(), auth.email)
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
