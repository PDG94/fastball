// import React from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
  // CardNumberElement,
  // CardExpiryElement,
  // CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
// import { createOrderAction } from './../../reduxToolkit/actions/orderAction'
import { deleteCart } from "../../reduxToolkit/actions/cartAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { updateStockProduct } from "../../reduxToolkit/actions/productAction";
const stripePromise = loadStripe(
  `pk_test_51MoJENC4TeWDJRMMK38M9pOQjCxPmBJf2gznJMe8DMkAu6W5y6lHpMd6E0BMSkfAIDJkAiv1yg4rI6b02n1WRQi4008rXBu5yH`
);

const CheckOutForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const stripe = useStripe();
  const elements = useElements();  
  const cartTotalAmount = useSelector((state) => state.cart.totalMount);
  const totalPayment = parseFloat(cartTotalAmount.toFixed(2), 0) * 100;
  const cartItems1 = useSelector((state) => state.cart.allProductsCart); 
  const userID1 = useSelector((state) => state.user._id);
  const customerEmail = useSelector((state) => state.user.email);
  const customerName = useSelector((state) => state.user.name);
  const items = cartItems1.map(element => element.name)
  const itemsDesc = JSON.stringify(items)
  const [isLoading, setIsLoading] = useState(false);
  
  const clearCart = async() => {
    console.log('En Clear Cart');
    await cartItems1.forEach(element=>{
      dispatch(deleteCart({idUser:userID1, idProduct:element.id}))
      dispatch(updateStockProduct({
        ...element,
        stock:element.stock-element.Cart.stock
      }));
    })

    setIsLoading(false)
    navigate("/");
    toast.success("Payment Succesful!");
  };

  const clearAndBack = () => {
    console.log('En Clear AND bACK');

    setIsLoading(true)
    setTimeout(clearCart, 3000);    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('En SUBMIT');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      // card: elements.getElement(CardNumberElement),
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      console.log("esto es id de transaccion", id)
      
      try {
        await axios.post(
          "https://fastball-production.up.railway.app/api/checkout",
          {
            amount: totalPayment,
            id,
            desc: itemsDesc,
          }
        );

        await axios.post(
          "https://fastball-production.up.railway.app/api/pago",
          {
            name: customerName,
            email: customerEmail,
            amount: (totalPayment) / 100,
            items: items,
          }
        );
        //Recibe por body orderNumber, totalAmount, products, userId, quantity
        //Hay que ver cómo se le manda el stock de cada producto
        const order = {orderNumber : id, totalAmount: cartTotalAmount, products:cartItems1, userId:userID1 }
        const orderCreated = await axios.post('/order/create', order);
        console.log(orderCreated)
        
        clearAndBack();
        
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
    {!isLoading ? (
    <div className="flex mt-12 justify-center h-screen mt-24">
    <div className="container bg-white flex rounded-lg drop-shadow-lg w-[50%] h-[55%] ">
      <form className="h-full w-full flex flex-col" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Link
            className=""
            to="/cartDetail"
            style={{
              textDecoration: "none",
            }}>
            <button 
              type='button'
              className="ml-4 my-4 px-4 py-2 rounded-l-xl m-0 bg-neutral-100 hover:bg-neutral-200 transition">Go Back</button>
          </Link>
          <h1 className="ml-8 text-3xl font-extrabold text-gray-900">Enter your payment method</h1>
        </div>
        <hr />
        <div className="w-full h-full justify-center flex">           
          <div className="flex w-full h-[93%] flex-col items-center">

            <div className="h-full w-full text-center flex items-center">
              {/* <h1>Resumen de lo comprado, que compro, cuantos, que tanto sale (cantidad*cuantos) y una sumatoria total</h1> */}
              <img className="border border-solid " src="https://res.cloudinary.com/dviri5ov1/image/upload/e_art:incognito,f_auto,q_auto,c_fill,h_330,w_1500/v1680677230/fastball/system/tarjetas_wq263l.jpg" alt="tarjatas" />
            </div>
            <div className="w-full">
              {/* <div className="bg-gray-100">
                <div className="px-4 py-4 flex justify-center" >
                  <div className="flex items-center mr-4">
                    <p className="mr-2">Number Card</p>
                    <CardNumberElement className="bg-white border rounded-md py-2 px-2 w-[160px]" />
                  </div>
                  <div className="flex items-center mr-4">
                    <p className="mr-2" >Expiry</p>
                    <div>
                      <CardExpiryElement className="bg-white border rounded-md py-2 px-2 w-[70px]" />
                    </div>
                  </div>
                  <div className="flex items-center mr-4">
                    <p className="mr-2">CVC</p>
                    <div>
                      <CardCvcElement className="bg-white border rounded-md py-2 px-2 w-[50px]" />
                    </div>
                  </div>
                </div>
              </div> */}
              <CardElement className="bg-white border rounded-md mx-6 my-2 py-2 px-2 w-[46.4vw]" />
              <hr />
              <div className="flex justify-center">
                <button
                  className="mt-4 px-[40%] py-2 rounded-xl text-white bg-green-600 hover:bg-green-500 transition"
                  >
                  Pay
                </button>              
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  ) : (
    <div className="flex justify-center items-cente mt-24">
        <Loader />
    </div>
)}
  </>
   
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