import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../../reduxToolkit/actions/cartAction";
import { decode } from "../../Auth/jwt";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCart = ({ productDetail }) => {
  const token = localStorage.getItem("tokenAuth");
  //const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [stock, setStock] = useState(1);
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > productDetail.stock) {
      setStock(productDetail.stock);
    } else if (value <= 1) {
      setStock(1);
    } else {
      setStock(value);
    }
  };
  const handleAddToCart = async () => {
    if (token) {
      if (stock > 0) {
        const decodedToken = decode(token);
        dispatch(
          addProductInCart({
            idUser: decodedToken._id,
            idProduct: productDetail.id,
            stock,
          })
        );
        console.log("agregado con exito");
        toast.success(
          `${productDetail.name} (${stock}) Added to cart Successfully!`,
          {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      } else {
        toast.info(`You must add at least 1 product`);
        setStock(1);
      }
    } else {
      toast.info(`You must log in to use the cart`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col  gap-4">
      <p className="font-medium">Available products: {productDetail.stock}</p>
      <div className="flex flex-row items-center gap-2">
        <label htmlFor="quantity" className="font-medium">
          Amount:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max={productDetail.stock}
          value={stock}
          onChange={handleQuantityChange}
          className="w-20 border rounded-md text-center"
        />
        <button
          className="px-4 py-2 text-white bg-green-600 hover:bg-green-500 
                rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm"
          onClick={handleAddToCart}
        >
          Add to cart <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default AddCart;
