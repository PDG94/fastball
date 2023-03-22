import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import {useState } from "react";
import { useDispatch } from "react-redux";
const {setFilter } = require('./../../reduxToolkit/slices/productSlice').productActions

const Home = ()=> {
    const dispatch = useDispatch()
    // const [loader,setLoader]=useState(true);
    useEffect(()=>{
        // setLoader(true);
        dispatch(setFilter({
            name: '',
            categoryId: '',
            order: ['name', 'asc'],
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className="Home">
            <Carousel />
            <CategoryButtons />
            <button className='btn btn-primary rounded-lg'>
                <Link to="/create">
                    temportal Create Product
                </Link>
            </button>
        </div>
    )
}

export default Home