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
            <img className="w-full" src='https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt={'title'} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">FULBO</div>
              <p className="font-bold-100 mb-1">View our futbol poducts</p>
            </div>
          </Link>
        </div>
        <div className="max-w-sm bg-gray-100 overflow-hidden rounded-lg  shadow-lg">
          <Link to='/catalogue' onClick={()=>handleClickCard('70f98e5c-ae42-4bc0-820b-8dbb74d6d958')}>
            <img className="w-full" src='https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt={'title'} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">BASKETBALL</div>
              <p className="font-bold-100 mb-1">View our basketball products</p>
            </div>
          </Link>
        </div>
        <div  className="max-w-sm bg-gray-100 overflow-hidden rounded-lg  shadow-lg">
          <Link to='/catalogue' onClick={()=>handleClickCard('0a548b9a-fe1f-48c8-9c83-adba7cdfff9b')}>
            <img className="w-full" src='https://images.unsplash.com/photo-1519611103964-90f61a50d3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRlbm5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt={'title'} />
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