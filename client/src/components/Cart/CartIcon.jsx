import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

function CartComponent() {
  
  return (
    <div id="cart">
      <Link to={`/cardDetail`} >
        <span id="cart-count">5</span>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  )
}

export default CartComponent