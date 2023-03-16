import CategoryButtons from "../categoryButtons.jsx/CategoryButtons"
import Navbar from "../Navbar/Navbar"

const Home = ()=> {
    return(
        <div>
            <Navbar />
            {/* Aqui ira carrousel */}
            <CategoryButtons></CategoryButtons>
        </div>
    )
}

export default Home