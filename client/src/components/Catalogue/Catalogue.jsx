import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct} from "../../reduxToolkit/actions/productAction"
import { fetchCategory } from "../../reduxToolkit/actions/categoryAction";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination"
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";

const {changePage } = require('./../../reduxToolkit/slices/productSlice').productActions;

const Catalogue = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { currentPage } = useSelector( state => state.product );

    const dispatch = useDispatch();
    const [productsPerPage] = useState(12)
    const { filteredProducts } = useSelector((state) => state.product);

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct= indexOfLastProduct - productsPerPage
    const currentProducts= filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const pagination = (pageNumber) => {
        dispatch(changePage(pageNumber))
    }

    useEffect(() => {
        window.scroll(0,0)
        setIsLoading(true);
        dispatch(fetchCategory())
            .then(() => {
                dispatch(fetchProduct())
                  .then(() => {
                    setIsLoading(false);
                  });
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
            <>
                {isLoading ? (
                    <div className="flex justify-center items-center w-[92%]">
                        <Loader />
                    </div>
                ) : (
                <div className='container mt-2 mx-auto mb-8 flex flex-col items-center'>
                    <SearchBar />
                    <div className="my-8">
                        <Pagination
                            productsPerPage={productsPerPage}
                            allProducts={filteredProducts.length}
                            pagination={pagination}
                        />
                    </div>
                    <div>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                                {currentProducts && currentProducts.map((pr) => (
                                    <Card
                                        key={`pk_${pr.id}`}
                                        id={pr.id}
                                        name={pr.name}
                                        active={pr.active}
                                        image={pr.image}
                                        description={pr.description}
                                        price={pr.price}
                                        stock={pr.stock}
                                        score={pr.score}
                                        cantReviews={pr.cantReviews}
                                        discount={pr.discount}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {currentProducts.length > 6 && <div className="my-8">
                        <Pagination
                            productsPerPage={productsPerPage}
                            allProducts={filteredProducts.length}
                            pagination={pagination}
                        />
                    </div>}
                </div>
                )}
            </>
    );
}
 
export default Catalogue;
