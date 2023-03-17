import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../../reduxToolkit/actions/productAction';
import { useEffect } from "react";

const Detail = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    //const { allProducts } = useSelector((state) => state.product);

    console.log()
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch,id])
    
    return ( 
        <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2xpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Product name
            </h1>
            <div className="mb-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold mr-4">
                $50
              </span>
              <span className="text-gray-600 text-lg line-through">$70</span>
            </div>
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-medium mb-2">
                Description
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                consectetur sit amet massa ac bibendum.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-medium mb-2">Details</h2>
              <ul className="text-gray-600">
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
              </ul>
            </div>
            <div>
            <button className="cursor-pointer text-white bg-green-500 hover:bg-gray-500 rounded focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Add to cart shopping">
            {"Add to cart  "}
            <i className="fa-solid fa-cart-shopping"></i>
            </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Reviews</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50x50"
              alt="Avatar"
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">John Doe</h3>
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
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                consectetur sit amet massa ac bibendum.
              </p>
            </div>
          </div>
         
        </div>

        </div>

     );
}
 
export default Detail;