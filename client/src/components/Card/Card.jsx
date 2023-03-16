import { Link } from "react-router-dom";

const Card = (props) => {
    console.log(props)
    return ( 
        <div className="max-w-sm bg-gray-100 overflow-hidden rounded-lg drop-shadow-lg">
            <Link>
              <img className="w-full" src={props.image} alt={'title'} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">{props.name}</div>
                <p className="font-bold-100 mb-1">{props.description}</p>
              </div>
            </Link >
          </div>
     );
}
 
export default Card;