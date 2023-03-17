import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../reduxToolkit/actions/productAction';
import { useEffect } from "react";

const Catalogue = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.product);
      
    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);
    return ( 
        <div className='Catalogue'>
            <div className=" py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {
                allProducts && allProducts.map((pr)=>{
                    return(
                    <Card
                    key={`pk_${pr.id}`}
                    id={pr.id}
                    name={pr.name}
                    active={pr.active}
                    image={pr.image}
                    description={pr.description}
                    price={pr.price}
                    stock={pr.stock}
                    ></Card>
                    )
                })
            }
            </div>
            </div>
            </div>
        </div>
    );
}
 
export default Catalogue;