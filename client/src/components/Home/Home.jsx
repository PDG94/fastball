import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import { Carousel } from './../Carousel/Carousel';


const Home = ()=> {
    return(
        <div className="Home">
            <Carousel />
            <CategoryButtons />
        </div>
    )
}

export default Home