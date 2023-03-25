import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProductsOnCart,updateCartProducts } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from '../../Auth/jwt';

function CartIcon() {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user)
  const cartProducts = useSelector(state => state.cart.allProductsCart);
  
  useEffect(() => {
    if(user){
      dispatch(getAllProductsOnCart(user._id));
    }
  }, [dispatch, token]);
  
 

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