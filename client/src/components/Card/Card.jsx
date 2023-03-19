import { Link } from "react-router-dom";

const Card = (props) => {
    return ( 
      <div className="border max-w-sm bg-gray-100 overflow-hidden rounded-lg drop-shadow-lg hov-cart pb-1.5"
      style={{height: '390px', padding: '5 px'}}
      title="Banner to product"
      >
           <Link to={`/details/${props.id}`} >
            <img className="w-full h-64 scale-down" src={props.image} alt={'title'} />
           </Link >
              <div className="px-6 pb-py-2">
              <div className="font-bold text-xl mb-1 card-name" title="Name product">{props.name}</div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">4 stars</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">
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
                  </span>
                </div>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black" title="Price">${props.price}</span>
                <button className="cursor-pointer text-white bg-green-500 hover:bg-gray-500 rounded focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" title="Add to cart shopping">
                {"Add to cart  "}
                <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
      </div>
     );
}
 
export default Card;