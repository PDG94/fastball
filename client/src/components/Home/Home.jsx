import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import {setFilter} from "../../reduxToolkit/actions/productAction"
import { useDispatch } from "react-redux";

const Home = ()=> {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setFilter({
            name: '',
            categoryId: '',
            order: ['name', 'asc'],
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="Home">
            <Loader></Loader>
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