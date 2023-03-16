import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import Navbar from "../Navbar/Navbar"
import { Carousel } from './../Carousel/Carousel';


const Home = ()=> {
    return(
        <div className="Home">
            <Navbar />
            <Carousel />
            <CategoryButtons />
        </div>
    )
}

export default Home