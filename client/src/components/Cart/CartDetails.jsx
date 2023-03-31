import { updateCart,deleteCart,totalMountProducts } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import ModalYesNo from '../ModalYesNo/ModalYesNo';

const CartDetails = () => {
  // Suscribirse al estado del carrito utilizando el selector de Redux
  const cartProducts = useSelector(state => state.cart.allProductsCart);
  const user = {_id: '8fe4ff1b-3968-44ae-a282-05a18be922c4'} 
  // useSelector(state => state.user);
  const dispatch=useDispatch();
  const [showModal, setshowModal] = useState();
  const [productDeleted, setproductDeleted] = useState({});

  const [products,setProducts]=useState({
    prod:[],
    totalPrice:0
  });

  const showModalDeleteProductCart = (idProduct, productImage)=>{ 
    setproductDeleted({idProduct, image: productImage, text: 'Are you sure you want to remove this product from the cart?'})
    setshowModal( true )
  }
  
  const handleClickDeleteCart = async(object)=>{
    if(object.action){
      await dispatch(deleteCart({idUser:user._id, idProduct:productDeleted.idProduct}));
    }
    setshowModal( false )
  }
  // const updateTotalMountSum=async(idUser,idProduct,stock,price)=>{ //no borrar por favor
      //console.log(products.totalPrice)
      // let suma = 0;
      // cartProducts && cartProducts.forEach(element => {
      // suma = suma + element.price*(element.Cart.stock);
      // });
      // let sumas=stock*price;
      // console.log(suma)
      // console.log(sumas)
      // await dispatch(totalMountProducts(products.totalPrice));
  //     await dispatch(updateCart({idUser:idUser, idProduct:idProduct, stock:stock}))
  // }
  // const updateTotalMountRes=async(idUser,idProduct,stock)=>{
    //console.log(products.totalPrice)
    // let suma = 0;
    // cartProducts && cartProducts.forEach(element => {
    //   suma = suma + element.price*(element.Cart.stock);
    // });
    // await dispatch(totalMountProducts(suma));
    // await dispatch(updateCart({idUser:idUser, idProduct:idProduct, stock:stock}))
    // }
  const updateTotalMount=async(event)=>{
    if(parseInt(event.target.value) > parseInt(event.target.max)){
      await dispatch(updateCart({idUser:user._id, idProduct:event.target.name, stock: event.target.max}))
      toast.info(`You can not buy more than the maximum available`);
    }else {
      await dispatch(updateCart({idUser:user._id, idProduct:event.target.name, stock: event.target.value}))
    }
  }

  // Actualizar el estado local del componente cuando cambie el estado del carrito
  useEffect(() => {
    const updateMount = async (suma) => {
      await dispatch(totalMountProducts(suma));
    };
  
    let suma = 0;
    cartProducts && cartProducts.forEach(element => {
      suma = suma + (element.price-(element.price*(element.discount/100)))*(element.Cart.stock);
    });
  
    const updatedProducts = {
      prod: cartProducts,
      totalPrice: suma
    };
  
    setProducts(updatedProducts);
  
    updateMount(suma);
  }, [cartProducts, dispatch]);
  return (
    <div className="flex flex-col items-center w-full mt-20 px-8">
    <div className="cart-container flex flex-row">
    <div className="products-container flex-1 md:w-2/3 p-4">
      {products.prod.length !== 0 ? (
        products.prod.map((product) => {
          return (
            <div
              key={"key_" + product.id}
              className="mb-4 bg-white shadow rounded-lg overflow-hidden cart-comp flex items-center"
              >
              <div className="p-4 pz4">
                {
                  product.image && 
                  <img src={`${product.image.slice(0,50)}c_limit,f_auto,h_100,q_auto,w_150/${product.image.slice(50)}`} alt="" />
                }
              </div>
              <div className="p-4 pz4">
                <h3 className="font-semibold text-lg mb-2 w-full">{product.name.trim()}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              <div className="ml-28 w-[50%] h-fit p-4 pz4">

                {/* <button name='aumentar'
                onClick={()=>updateTotalMountSum(user._id,product.id,product.Cart.stock+1,product.price)}
                disabled={product.Cart.stock===product.stock}
                >
                <i className="fa-sharp fa-solid fa-arrow-up"></i></button> */}
                <p>Amount</p>
                <input 
                  type="number" 
                  className="text-center relative  border border-color-black w-fit font-semibold text-lg" 
                  value={parseInt(product.Cart.stock) > parseInt(product.stock)? product.stock: product.Cart.stock} 
                  min={1} 
                  max={parseInt(product.stock)} 
                  name= {product.id}
                  onChange={updateTotalMount}
                />
                <p className='text-slate-300 w-fit'>of {product.stock} availabe</p>
                {/* <label className="font-semibold text-lg mb-2">{product.Cart.stock}</label> */}
                {/* <button name='disminuir'
                onClick={()=>updateTotalMountRes(user._id,product.id,product.Cart.stock-1)}
                disabled={product.Cart.stock===1}
                >
                <i className="fa-solid fa-arrow-down"></i></button> */}
              </div>
              <div className="pz4">
                  <span className='font-semibold text-lg text-blue-800'>
                  {/* (props.price - (props.price*(props.discount/100))).toFixed(2) */}
                    {
                      showModal &&
                      <ModalYesNo
                        objectModal={productDeleted}
                        functionModal={handleClickDeleteCart}
                      />
                    }
                    $ {(product.Cart.stock*(product.price-(product.price*(product.discount/100)))).toFixed(2)}
                    <i onClick={()=>showModalDeleteProductCart(product.id, product.image)} className="ml-4 fa-solid fa-trash"></i>
                  </span>
                  {/* <button className="px-4 py-2 text-white bg-yellow-400 hover:bg-gray-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
                  Buy
                  </button> */}
              </div>
            </div>
          );
        })
      ) : (
        <div className="mb-4 bg-white shadow rounded-lg overflow-hidden cart-comp flex items-center">
          <div className="p-4 w-[59.8vw]">
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
    <div className="summary-container flex-0 md:w-1/3 p-3">
      <div className="bg-white shadow rounded-lg overflow-hidden p-4">
        <h3 className="font-semibold text-lg mb-2">
          Resumen
        </h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Total:</p>
          <p className="font-semibold text-2xl text-blue-800">
            $ {products.totalPrice.toFixed(2)} 
          </p>
          <div className="flex flex-row items-center gap-2">
            { 
              products.totalPrice > 0
              ? <button className="px-4 py-2 text-white bg-green-600 hover:bg-green-500 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm">
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