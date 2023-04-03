import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProductsOnCart } from '../../reduxToolkit/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
// import { decode } from '../../Auth/jwt';

function CartIcon() {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user)
 const cartProducts = useSelector(state => state.cart.allProductsCart);
  useEffect(() => {
    if(user){
      dispatch(getAllProductsOnCart(user._id));      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
    
  

  return (
    <div id="cart">
      <Link to={`/cartDetail`} >
        <span id="cart-count">{cartProducts.length}</span>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  )
}
export default CartIcon;