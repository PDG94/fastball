import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProductsOnCart,updateCartProducts } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from '../../Auth/jwt';

function CartIcon() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('tokenAuth');
  
  useEffect(() => {
    if(token){
      const decodedToken = decode(token);
      dispatch(getAllProductsOnCart(decodedToken._id));
    }
  }, [dispatch, token]);
  
  const cartProducts = useSelector(state => state.cart.allProductsCart);

  // Aquí actualizamos el estado del carrito con los productos actualizados
  useEffect(() => {
    dispatch(updateCartProducts(cartProducts));
  }, [dispatch, cartProducts]);

  return (
    <div id="cart">
      <Link to={`/cardDetail`} >
        <span id="cart-count">{cartProducts.length}</span>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  )
}
export default CartIcon;