import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from "react";
import { getAllProductsOnCart } from '../../reduxToolkit/actions/cartAction';

const CartDetails = () => {
    const dispatch=useDispatch();
    const user= useSelector((state) => state.user);
    const [products,setProducts]=useState([]); 
    useEffect(()=>{
        const product=dispatch(getAllProductsOnCart(user.id))
        console.log("Data products"+product.data);
        setProducts(product.data);
    },[getAllProductsOnCart])
  return (
    <div class="flex flex-col md:flex-row">
  <div class="md:w-2/3 p-4">
    <div class="mb-4">
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">BasketBall</h3>
          <p class="text-gray-700">Pelota Roja</p>
        </div>
        <div class="bg-gray-100 p-4">
          <p class="text-gray-900 font-semibold">$100.00</p>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">Guantes</h3>
          <p class="text-gray-700">Guantes negros</p>
        </div>
        <div class="bg-gray-100 p-4">
          <p class="text-gray-900 font-semibold">$50.00</p>
        </div>
      </div>
    </div>
  </div>
    <div class="md:w-1/3 p-4 bg-gray-100">
      <div class="bg-white shadow rounded-lg overflow-hidden p-4">
        <h3 class="font-semibold text-lg mb-2">Aqui todo el resumen las sumas de todo el carrito y eso</h3>
        <div class="flex justify-between items-center mb-2">
          <p class="text-gray-700">Subtotal:</p>
          <p class="text-gray-900 font-semibold">$150.00</p>
          <div className="flex flex-row items-center gap-2">
                <button className="px-4 py-2 text-white bg-green-500 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm"  >Comprar todo</button>
            </div>
      </div>
      </div>
      </div> 
      </div> 
  );
};

export default CartDetails;