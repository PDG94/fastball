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
          <div className="flex items-center my-2">
            <Stars score={props.score} reviews={props.cantReviews} />
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-3xl text-blue-800 font-bold tdark:text-black" title="Price">
            ${(props.price - (props.price*(props.discount/100))).toFixed(2)}
          </span>
          {
            props.discount > 0 &&
            <>
              <span className="text-green-500 font-semibold ml-4">{props.discount}% OFF</span> 
              <span className="ml-4 text-lg md:text-2lg lg:text-3lg font-light line-through"> ${props.price.toFixed(2)}</span>
            </>
          }
        </div>
      </div>
    </div>
  );
}
 
export default Card;