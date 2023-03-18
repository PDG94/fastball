import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from "../../reduxToolkit/actions/categoryAction";
import { fetchProduct} from "../../reduxToolkit/actions/productAction"
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination"
import SearchBar from "../SearchBar/SearchBar";
const {changePage } = require('./../../reduxToolkit/slices/productSlice').productActions

const Catalogue = () => {
    const { currentPage } = useSelector( state => state.product )

    const dispatch = useDispatch();
    const [productsPerPage] = useState(6)
    const { filteredProducts } = useSelector((state) => state.product);

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct= indexOfLastProduct - productsPerPage
    const currentProducts= filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const pagination = (pageNumber) => {
        dispatch(changePage(pageNumber))
    }

    useEffect(() => {
      dispatch(fetchProduct());
      dispatch(fetchCategory())
    }, []);

    return ( 
        <div className='container mt-2 mx-auto'>
            <SearchBar />
            <div>
                <Pagination
                    productsPerPage={productsPerPage}
                    allProducts={filteredProducts.length}
                    pagination={pagination}
                />
            </div>

            <div className=" py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {
                        currentProducts && currentProducts.map((pr)=>{
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