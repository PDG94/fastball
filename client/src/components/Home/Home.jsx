import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';
import Loader from "../Loader/Loader";


const Home = ()=> {
    return(
        <div className="Home">
            <Loader></Loader>
            <Carousel />
            <CategoryButtons />
        </div>
    )
}

export default Home