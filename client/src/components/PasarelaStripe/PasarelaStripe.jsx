// import React from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { emptyCart } from "../../reduxToolkit/actions/";
import { Link, useNavigate } from "react-router-dom";
const stripePromise = loadStripe(
  `pk_test_51MeScXEohVMDTuBfkv6jlBnpXq6EN6W0vJs3bFlepyOusbfYEuIAhoOXcsYFGgcDcOqwJLAqYL4qqNegKOdGJOvE00lBepiZlb`
);

const CheckOutForm = () => {

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const stripe = useStripe();
  const elements = useElements();

  const cartTotalAmount = useSelector((state) => state.cart.totalMount);
  const totalPayment = parseFloat(cartTotalAmount.toFixed(2), 0) * 100;
  const cartItems1 = useSelector((state) => state.cart.allProductsCart);
  const userID1 = useSelector((state) => state.user._id);
  const customerEmail = useSelector((state) => state.user.email);
  const customerName = useSelector((state) => state.user.name);

  const clearCart1 = () => {
    // dispatch(emptyCart());
    navigate("/home");
  };

  const clearAndBack = () => {
    setTimeout(clearCart1, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      const items = cartItems1.map(element =>element.name)
      const itemsDesc = JSON.stringify(items)
      try {
        await axios.post(
          "https://fastball-production.up.railway.app/api/checkout",
          {
            amount: totalPayment,
            id,
            userID1,
            userEmail: customerEmail,
            items: cartItems1,
            desc: itemsDesc,
          }
        );
                
        await axios.post(
          "https://fastball-production.up.railway.app/api/pago",
          {
            name: customerName,
            email: customerEmail,
            amount: (totalPayment)/100,
            items: items,
          }
        );
        toast.success("Payment Succesful!");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="">
      <div className="">
        <form className="" onSubmit={handleSubmit}>
        
          <Link
            className=""
            to="/cart"
            style={{
              textDecoration: "none",
            }}
          >
            <button className="">Go Back</button>
          </Link>
          
          <h2 className="">Enter your payment method</h2>

          <div className="">
            {/* aca podria ir un resumen de lo comprado, que compro, cuantos, que tanto sale (cantidad*cuantos) y una sumatoria total */}
          </div>
          <div className="" style={{ height: 550 }}>
            <div className="">
              <span>Number Card</span>
              <div className="">
                <CardNumberElement />
              </div>
              <hr />
              <span>Expiry</span>
              <div className="">
                <CardExpiryElement />
              </div>
              <hr />
              <span>CVC</span>
              <div className="">
                <CardCvcElement />
              </div>
            </div>
            <div className="">
              <button
                className=""
                onClick={clearAndBack}
                style={{ width: "400px", height: "55px" }}
              >
                Pay
              </button>              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
function PasarelaStripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
}

export default PasarelaStripe;