import { updateCart,deleteCart } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const CartDetails = () => {
  // Suscribirse al estado del carrito utilizando el selector de Redux
  const cartProducts = useSelector(state => state.cart.allProductsCart);
  const user = useSelector(state => state.user);
  const dispatch=useDispatch();
  const [products,setProducts]=useState({
    prod:[],
    totalPrice:0
  });
  const deleteProductCart=async(idProduct)=>{
    await dispatch(deleteCart({idUser:user._id, idProduct:idProduct}));
  }

  // Actualizar el estado local del componente cuando cambie el estado del carrito
  useEffect(() => {
    let suma = 0;
    cartProducts.forEach(element => {
      suma = suma + element.price*(element.Cart.stock);
    });
    setProducts({
      ...products,  
      prod:cartProducts,
      totalPrice:suma
    });
  }, [cartProducts]);

  return (
    <div className="flex flex-col md:w-full">
    <div className="cart-container flex flex-row">
    <div className="products-container flex-1 md:w-2/3 p-4">
      {products.prod.length !== 0 ? (
        products.prod.map((product) => {
          return (
            <div
              key={"key_" + product.id}
              className="mb-4 bg-white shadow rounded-lg overflow-hidden cart-comp"
              >
              <div className="p-4 pz4">
              <img src={product.image} alt="" />
              </div>
              <div className="p-4 pz4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              </div>
              <div className="p-4 pz4">

                <button name='aumentar'
                onClick={()=>dispatch(updateCart({idUser:user._id, idProduct:product.id, stock:product.Cart.stock+1}))}>
                <i className="fa-sharp fa-solid fa-arrow-up"></i></button>
                <label className="font-semibold text-lg mb-2">{product.Cart.stock}</label>
                <button name='disminuir'
                onClick={()=>dispatch(updateCart({idUser:user._id, idProduct:product.id, stock:product.Cart.stock-1}))}>
                <i className="fa-solid fa-arrow-down"></i></button>
              </div>
              <div className="p-4 pz4 font-semibold text-lg mb-2">
                    
                    <i  onClick={() => deleteProductCart(product.id)} className="fa-solid fa-trash"></i>
                    
                  $ {product.Cart.stock*product.price}
                  <button className="px-4 py-2 text-white bg-yellow-400 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
                  Comprar
                  </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              Aún no agregaste productos al carrito?
            </h3>
          </div>
        </div>
      )}
    </div>
    <div className="summary-container flex-0 md:w-1/3 p-3 mt-4 mr-4">
      <div className="bg-white shadow rounded-lg overflow-hidden p-4">
        <h3 className="font-semibold text-lg mb-2">
          Aqui todo el resumen las sumas de todo el carrito y eso
        </h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Subtotal:</p>
          <p className="text-gray-900 font-semibold">
            $ {products.totalPrice} 
          </p>
          <div className="flex flex-row items-center gap-2">
            <button className="px-4 py-2 text-white bg-green-500 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
              Comprar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

   );
  };
  
  export default CartDetails;