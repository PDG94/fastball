import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from "../../reduxToolkit/actions/categoryAction";
import {setFilter, fetchProduct} from "../../reduxToolkit/actions/productAction"
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination"

const Catalogue = () => {
    const dispatch = useDispatch();
    const [productsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)    
    const { configFilter, filteredProducts } = useSelector((state) => state.product);
    const { allCategories } = useSelector((state) => state.category);

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct= indexOfLastProduct - productsPerPage
    const currentProducts= filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
      dispatch(fetchProduct());
      dispatch(fetchCategory())
    }, [dispatch, setCurrentPage]);

    const handleChangeCategory = (event)=> {
        const filterCategoryId = event.target.value === 'all' ? '' : event.target.value
        const filters = { ...configFilter, categoryId: filterCategoryId}
        dispatch(setFilter(filters))
    }

    const handleChangeOrder = (event)=> {
        const filterOrder = [configFilter.order[0], event.target.value]
        const filters = { ...configFilter, order: filterOrder}
        dispatch(setFilter(filters))
    }

    const handleChangeTypeOrder = (event)=> {
        const filterOrder = [event.target.value, configFilter.order[1]]
        const filters = { ...configFilter, order: filterOrder}
        dispatch(setFilter(filters))
    }
    
    const handleChangeSearchByName = (event)=> {
        const filterName = event.target.value
        console.log(filterName);
        const filters = { ...configFilter, name: filterName}
        dispatch(setFilter(filters))
    }

    return ( 
        <div className='mt-8'>
            <div className="flex ml-12">
                <div>
                    <label htmlFor="filter" className="mr-1 text-sm font-medium text-gray-700">Filter by </label>
                    <select 
                        name="category" 
                        id="category" 
                        className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={handleChangeCategory}
                    >
                        <option value="all">All</option>
                        {allCategories.map((cat, ind)=> <option key={ind} value={cat.id} >{cat.name}</option>)}
                    </select>
                </div>
                <div className="ml-4">
                    <label htmlFor="order" className="mr-1 text-sm font-medium text-gray-700">Order </label>    
                    <select 
                        name="order" 
                        id="order" 
                        className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={handleChangeOrder}
                    > 
                        <option value= "asc" >Ascending</option>
                        <option value= "desc" >Descending</option>
                    </select>
                    <label htmlFor="order" className="mr-1 text-sm font-medium text-gray-700"> by </label>
                    <select 
                        name="typeOrder" 
                        id="typeOrder" 
                        className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={handleChangeTypeOrder}
                    > 
                        <option value= "name" >Name</option>
                        <option value= "price" >Price</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor='search' className='ml-4 mr-1 text-sm font-medium text-gray-700'>Search</label>
                    <input
                        type='text'
                        id='search'
                        name='search'
                        placeholder='by product name ...'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={handleChangeSearchByName}
                    />
                </div>
            </div>
            <br></br>
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