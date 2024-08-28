import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PaymentForm({cartItems, getCartTotal, HandlePayment}){ 
    return ( 
        <div className="payment-form-area">
        <div className="payment-form-header">
          <b>Payment Detail</b>
          <p>Please complete below.</p>
        </div>

        <div className="payment-form-info-list">
          <div className="verify-flag-container">
          {/* <FontAwesomeIcon className="fa-1x" icon={faInfoCircle} /> */}
            <p>Verify the information before proceeding</p>
          </div>
          <div className="payment-product-list">
            {cartItems.map((item) => {
                return ( 
                    <div key={item.id} className="payment-product-list-item">
                    <p>{ item.name }</p>
                    <p>{ item.quantity } units</p>
                    <p>{ item.price }$ c/u</p>
                  </div>
                )
            })}
          </div>

          <div className="payment-form-info-item">
            <b>{`Tax (10%)`}</b>
            <p>{getCartTotal}$</p>
          </div>
          <div className="payment-form-info-item">
            <b>Total</b>
            <p>{getCartTotal}$</p>
          </div>
        </div>
        <div className="payment-form-info-list">
          <div className="payment-input-field">
            <label htmlFor="" className="input-label-pay-form-label">
              Credit Cart Number
            </label>
            <input
              className="input-label-pay-form"
              type="text"
              name="email"
              id="email"
              placeholder=" 0000 0000 0000 0000 "

            />
          </div>
          
          <div className="payment-input-field" style={{margin: '1rem 0px'}}>
            <label htmlFor="" className="input-label-pay-form-label">
              Email Confirmation
            </label>
            <input
              className="input-label-pay-form"
              type="text"
              name="email"
              id="email"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="payment-input-field" style={{margin: '1rem 0px'}}>
            <label htmlFor="" className="input-label-pay-form-label">
              Code Of The Cart
            </label>
            <input
              className="input-label-pay-form"
              type="text"
              name="email"
              id="email"
              placeholder="xxx xxx xxx"
            />
          </div>
          
          
          <div className="bank-option-area">
            <div className="bank-image-area">
              <img style={{ width: "100%" }} src="/americaexpress.jpg" alt="" />
            </div>
            <div className="bank-image-area">
              <img style={{ width: "100%" }} src="/bankofamerica.png" alt="" />
            </div>
            <div className="bank-image-area">
              <img style={{ width: "100%" }} src="/mastercard.png" alt="" />
            </div>
            <div className="bank-image-area">
              <img style={{ width: "100%" }} src="/visa.jpeg" alt="" />
            </div>
          </div>
        </div>

        <button className="btn-procee-payment" onClick={HandlePayment}>
          {/* <Link to={'/payment/status'}>procee</Link> <span>{`>`}</span> */}
          pay
        </button>
      </div>
    )
}