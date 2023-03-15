import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import Navbar from "../Navbar/Navbar"

const Home = ()=> {
    return(
        <div>
            <Navbar></Navbar>
            {/* Aqui ira carrousel */}
            <CategoryButtons></CategoryButtons>
        </div>
    )
}

export default Home