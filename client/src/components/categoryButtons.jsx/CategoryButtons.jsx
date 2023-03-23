import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const {setFilter } = require('./../../reduxToolkit/slices/productSlice').productActions

const CategoryButtons = () => {
  const dispatch = useDispatch();
  const { configFilter } = useSelector((state) => state.product)

  const handleClickCard = (categoryId)=> {
      dispatch(setFilter({ ...configFilter, categoryId}))
  }

  return (
    <div className="mt-8">
      <div className="flex flex-row justify-between gap-x-5 px-12 pb-10" >
        <div className="max-w-sm bg-gray-100 overflow-hidden  rounded-lg drop-shadow-lg">
          <Link to='/catalogue' onClick={()=>handleClickCard('7aa8e1e3-a08a-40bf-8216-afd26c525259')}>
            <img className="w-full" src='https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_270,q_auto,w_400/v1679508397/fastball/system/FootBall_q6zis6.avif' alt={'title'} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">FULBO</div>
              <p className="font-bold-100 mb-1">View our futbol poducts</p>
            </div>
          </Link>
        </div>
        <div className="max-w-sm bg-gray-100 overflow-hidden rounded-lg  shadow-lg">
          <Link to='/catalogue' onClick={()=>handleClickCard('70f98e5c-ae42-4bc0-820b-8dbb74d6d958')}>
            <img className="w-full" src='https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_270,q_auto,w_400/v1679508395/fastball/system/BasketBall_hx7shh.avif' alt={'title'} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">BASKETBALL</div>
              <p className="font-bold-100 mb-1">View our basketball products</p>
            </div>
          </Link>
        </div>
        <div  className="max-w-sm bg-gray-100 overflow-hidden rounded-lg  shadow-lg">
          <Link to='/catalogue' onClick={()=>handleClickCard('0a548b9a-fe1f-48c8-9c83-adba7cdfff9b')}>
            <img className="w-full" src='https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_270,q_auto,w_400/v1679508394/fastball/system/TennisBall_mlaeum.avif' alt={'title'} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">TENNIS</div>
              <p className="font-bold-100 mb-1">View our tennis products</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
}
 
export default CategoryButtons;