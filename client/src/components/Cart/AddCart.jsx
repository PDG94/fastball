import React, { useState } from "react";
import { useSelector } from 'react-redux'

const AddCart = (props) => {
    const productos=[
        {id:"abcd",name:"pelota",description:"pelota roja"},
        {id:"abcd",name:"pelota tennis",description:"pelota verde"},
        {id:"abcd",name:"pelota de playa",description:"pelota azul"},
        {id:"abcd",name:"pelota de playa",description:"pelota azul"},

        {id:"abcd",name:"pelota de playa",description:"pelota azul"},

        {id:"abcd",name:"pelota de playa",description:"pelota azul"},

        {id:"abcd",name:"pelota de playa",description:"pelota azul"}


    ]
    const user = useSelector((state) => state.user);
    const [availableProducts, setAvailableProducts] = useState(productos.length);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    const handleAddToCart = () => {
        if (availableProducts >= quantityToAdd) {
            setAvailableProducts(availableProducts - quantityToAdd);
            setCartQuantity(cartQuantity + quantityToAdd);
            setQuantityToAdd(1);
        }
    }
    // const addCart=()=>{
    //     return new Promise((resolve,reject)=>{
    //         try {
                
    //         } catch (error) {
                
    //         }
    //     })
    // }
    const handleQuantityChange = (event) => {
        /////enviaremos al action cuando esté disponible
        // user.id y el id del producto que viene por mis propss
        console.log(user._id);
        console.log(props.idProduct);
        console.log(cartQuantity);
        const value = parseInt(event.target.value);
       
        setQuantityToAdd(value);
    }
    return ( 
        <div className="flex flex-col  gap-4 p-4 border-dashed ">
            <p className="font-medium">Productos disponibles: {availableProducts}</p>
            <div className="flex flex-row items-center gap-2">
                <label htmlFor="quantity" className="font-medium">Cantidad:</label>
                <input type="number" id="quantity" name="quantity" min="1" max={availableProducts} value={quantityToAdd} onChange={handleQuantityChange} className="w-20 border rounded-md text-center" />
                <button className="px-4 py-2 text-white bg-green-500 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm" onClick={handleAddToCart}>Agregar al carrito <i className="fa-solid fa-cart-shopping"></i></button>
            </div>
            <p className="font-medium">Productos en el carrito: {cartQuantity}</p>
        </div>
    );
}

export default AddCart;