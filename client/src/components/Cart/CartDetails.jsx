import { updateCart,deleteCart,totalMountProducts } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

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
     dispatch(deleteCart({idUser:user._id, idProduct:idProduct}));
  }
   
  const updateTotalMountSum=async(idUser,idProduct,stock,price)=>{ //no borrar por favor
      //console.log(products.totalPrice)
      // let suma = 0;
      // cartProducts && cartProducts.forEach(element => {
      // suma = suma + element.price*(element.Cart.stock);
      // });
      // let sumas=stock*price;
      // console.log(suma)
      // console.log(sumas)
      // await dispatch(totalMountProducts(products.totalPrice));
      await dispatch(updateCart({idUser:idUser, idProduct:idProduct, stock:stock}))
  }
  const updateTotalMountRes=async(idUser,idProduct,stock)=>{
    //console.log(products.totalPrice)
    // let suma = 0;
    // cartProducts && cartProducts.forEach(element => {
    //   suma = suma + element.price*(element.Cart.stock);
    // });
    // await dispatch(totalMountProducts(suma));
    await dispatch(updateCart({idUser:idUser, idProduct:idProduct, stock:stock}))
    }

  // Actualizar el estado local del componente cuando cambie el estado del carrito
  useEffect(() => {
    const updateMount = async (suma) => {
      await dispatch(totalMountProducts(suma));
    };
  
    let suma = 0;
    cartProducts && cartProducts.forEach(element => {
      suma = suma + element.price*(element.Cart.stock);
    });
  
    const updatedProducts = {
      prod: cartProducts,
      totalPrice: suma
    };
  
    setProducts(updatedProducts);
  
    updateMount(suma);
  }, [cartProducts, dispatch]);
  return (
    <div className="flex flex-col md:w-full mt-20">
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
                onClick={()=>updateTotalMountSum(user._id,product.id,product.Cart.stock+1,product.price)}
                disabled={product.Cart.stock===product.stock}
                >
                <i className="fa-sharp fa-solid fa-arrow-up"></i></button>
                <label className="font-semibold text-lg mb-2">{product.Cart.stock}</label>
                <button name='disminuir'
                onClick={()=>updateTotalMountRes(user._id,product.id,product.Cart.stock-1)}
                disabled={product.Cart.stock===1}
                >
                <i className="fa-solid fa-arrow-down"></i></button>
              </div>
              <div className="p-4 pz4 font-semibold text-lg mb-2">
                    
                  <i  onClick={() => deleteProductCart(product.id)} className="fa-solid fa-trash"></i>
                    
                  $ {product.Cart.stock*product.price}
                  
                  <button className="px-4 py-2 text-white bg-yellow-400 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
                  Buy
                  </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
            Still haven't added products to cart? Let's get to it! 
            </h3>
            <h3 className="font-semibold text-sky-700 mb-2 underline">
              <Link to="/catalogue">Catalogue</Link>
            </h3>
          </div>
        </div>
      )}
    </div>
    <div className="summary-container flex-0 md:w-1/3 p-3 mr-4">
      <div className="bg-white shadow rounded-lg overflow-hidden p-4">
        <h3 className="font-semibold text-lg mb-2">
          Resumen
        </h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Total:</p>
          <p className="text-gray-900 font-semibold">
            $ {products.totalPrice} 
          </p>
          <div className="flex flex-row items-center gap-2">
            { 
              products.totalPrice > 0
              ? <button className="px-4 py-2 text-white bg-green-500 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
              <Link to={'/payment'}>Buy</Link>
              </button>
              : <p className="px-4 py-2 text-white bg-gray-500 rounded-md font-medium text-sm">Buy</p>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

   );
  };
  
  export default CartDetails;