import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
// import { Link } from "react-router-dom";
import { useEffect } from "react";
// import {useState } from "react";
import { useDispatch } from "react-redux";
import PopularBalls from "../categoryButtons.jsx/PopularBalls";
import { fetchProduct } from "../../reduxToolkit/actions/productAction";
import RandomCarousel from "../categoryButtons.jsx/RandomCarousel";
const {setFilter } = require('./../../reduxToolkit/slices/productSlice').productActions

const Home = ()=> {
    const dispatch = useDispatch()
    // const [loader,setLoader]=useState(true);
    useEffect(()=>{
        // setLoader(true);
        window.scroll(0,0)
        dispatch(setFilter({
            name: '',
            categoryId: '',
            order: ['AZ'],
        }));
        dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className="flex flex-col justify-center">
            <div className="row">
                <div className="col-12 cont-carousel">
                    <Carousel />
                </div>
                <div className="col-8 cont-category">
                    <CategoryButtons />
                </div>
                <div className="col-4 ">
                    <PopularBalls/>
                </div>
                <div className="col-12 cont-carousel border-dashed-t">
                    <RandomCarousel />  
                </div>
            </div>  
        </div>
    )
}

export default Home