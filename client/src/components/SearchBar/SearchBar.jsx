import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const {setFilter } = require('./../../reduxToolkit/slices/productSlice').productActions

const SearchBar = () => {
    const dispatch = useDispatch();
    const { configFilter } = useSelector((state) => state.product);
    const { allCategories } = useSelector((state) => state.category);
    const [ currentFilter, setCurrentFilter ] = useState({
        name: '',
        categoryId: '',
        order: ['name', 'asc'],
    })

    const handleChangeCategory = (event)=> {
        const filterCategoryId = event.target.value === 'all' ? '' : event.target.value
        const filters = { ...configFilter, categoryId: filterCategoryId}
        dispatch(setFilter(filters))
        setCurrentFilter(filters)
    }

    const handleChangeOrder = (event)=> {
        const filterOrder = [configFilter.order[0], event.target.value]
        const filters = { ...configFilter, order: filterOrder}
        dispatch(setFilter(filters))
        setCurrentFilter(filters)
    }

    const handleChangeTypeOrder = (event)=> {
        const filterOrder = [event.target.value, configFilter.order[1]]
        const filters = { ...configFilter, order: filterOrder}
        dispatch(setFilter(filters))
        setCurrentFilter(filters)
    }
    
    const handleChangeSearchByName = (event)=> {
        const filterName = event.target.value
        const filters = { ...configFilter, name: filterName}
        dispatch(setFilter(filters))
        setCurrentFilter(filters)
    }

    useEffect(()=>{
        setCurrentFilter(configFilter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className="flex mx-auto mb-8 w-full bg-gray-100 px-5 py-5 rounded-lg justify-between drop-shadow-lg ">
            <div>
                <label htmlFor="filter" className="mr-1 text-sm font-medium text-gray-700">Catalogs </label>
                <select 
                    name="category" 
                    id="category" 
                    className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={handleChangeCategory}
                    value={currentFilter.categoryId? currentFilter.categoryId : 'all'}
                >
                    <option value="all">All</option>
                    {allCategories.map((cat, ind)=> <option key={ind} value={cat.id} >{cat.name}</option>)}
                </select>
            </div>
            <div className="flex items-center">
                <label htmlFor='search' className='ml-4 mr-1 text-sm font-medium text-gray-700'>Search</label>
                <input
                    type='text'
                    id='search'
                    name='search'
                    placeholder='by product name ...'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={handleChangeSearchByName}
                    value={currentFilter.name}
                />
            </div>
            <div className="ml-4 mr-8">
                <label htmlFor="order" className="mr-1 text-sm font-medium text-gray-700">Order </label>    
                <select 
                    name="order" 
                    id="order" 
                    className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={handleChangeOrder}
                    value={currentFilter.order[1]}
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
                    value={currentFilter.order[0]}
                > 
                    <option value= "name" >Name</option>
                    <option value= "price" >Price</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar