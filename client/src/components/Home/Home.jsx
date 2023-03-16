import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import Navbar from "../Navbar/Navbar"
import { Carousel } from './../Carousel/Carousel';
import Img1 from "./../../images/img1.jpeg" 
import Img2 from "./../../images/img2.jpeg" 
import Img3 from "./../../images/img3.jpeg" 
import Img4 from "./../../images/img4.jpeg" 
import Img5 from "./../../images/img5.jpeg" 

const slides = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
  ]

const Home = ()=> {
    return(
        <div>
            <Navbar></Navbar>

            {/* Aqui ira carrousel */}
            <div className='max-w-fit mx-auto px-12'>
                <Carousel autoSlide={true}>
                    { slides.map( (slide, ind) =>( <img  className="object-cover" key={ind} src={slide} alt='imgage carousel' /> )) }
                </Carousel>     
      </div>
            <CategoryButtons></CategoryButtons>
        </div>
    )
}

export default Home