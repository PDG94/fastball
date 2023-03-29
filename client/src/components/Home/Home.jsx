import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
// import { Link } from "react-router-dom";
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
            order: ['AZ'],
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className="flex flex-col justify-center">
            <Carousel />
            <CategoryButtons />
        </div>
    )
}

export default Home