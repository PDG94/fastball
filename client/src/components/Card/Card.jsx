import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";

const Card = (props) => {
  const formatImage = `${props.image.slice(0,50)}c_limit,f_auto,h_400,q_auto,w_400/${props.image.slice(50)}`

  return ( 
    <div className="shad max-w-sm bg-white-100 overflow-hidden  shad hov-cart pb-1.5"
    style={{height: '390px', padding: '5 px'}}
    title="Banner to product"
    >
      <div className="w-full h-64 bg-white">
        <Link to={`/details/${props.id}`} >
          <img className="w-full h-64 object-contain" src={formatImage} alt={'title'} />
        </Link >
      </div>
      <hr />
      <div className="px-6 pb-py-2">
        <div className="font-bold text-xl mb-1 card-name" title="Name product">{props.name}</div>
        <div className="flex items-center">
        {/* <span className="text-sm text-gray-600 mr-2">4 stars</span> */}
          <div className="flex items-center my-2">
            <Stars score={props.score} reviews={props.cantReviews} />
            {/* <span className="text-yellow-500 mr-1">
              <i className="fas fa-star"></i>
            </span>
            <span className="text-yellow-500 mr-1">
              <i className="fas fa-star"></i>
            </span>
            <span className="text-yellow-500 mr-1">
              <i className="fas fa-star"></i>
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star"></i>
            </span> */}
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-3xl text-blue-800 font-bold tdark:text-black" title="Price">
            {/* ${props.price} */}
            ${(props.price - (props.price*(props.discount/100))).toFixed(2)}
          </span>
          {
            props.discount > 0 &&
            <>
              <span className="text-green-500 font-semibold ml-4">{props.discount}% OFF</span> 
              <span className="ml-4 text-lg md:text-2lg lg:text-3lg font-light line-through"> ${props.price.toFixed(2)}</span>
            </>
          }
        {/* <button className="cursor-pointer text-white bg-green-500 hover:bg-gray-500 rounded focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" title="Add to cart shopping">
        {"Add to cart  "}
        <i className="fa-solid fa-cart-shopping"></i>
        </button> */}
        </div>
      </div>
    </div>
  );
}
 
export default Card;