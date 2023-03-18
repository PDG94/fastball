import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = ()=> {
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