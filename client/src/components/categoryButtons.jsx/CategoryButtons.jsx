import { Link } from "react-router-dom";

const CategoryButtons = () => {
    const pruebaClick=(name)=>{
        alert('prueba de click ',name)
    }
    return (
        <div className="flex flex-row justify-between gap-5 px-12 py-5" >
        <div onClick={pruebaClick} className="max-w-sm bg-gray-100 overflow-hidden drop-shadow-lg">
        <Link>
          <img className="w-full" src='https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt={'title'} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">FULBO</div>
            <p className="font-bold-100 mb-1">View our futbol poducts</p>
          </div>
        </Link>
        </div>
        <div  onClick={pruebaClick} className="max-w-sm bg-gray-100 overflow-hidden shadow-lg">
        <Link>
          <img className="w-full" src='https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt={'title'} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">BASKETBALL</div>
            <p className="font-bold-100 mb-1">View our basketball products</p>
          </div>
        </Link>
        </div>
        <div  onClick={pruebaClick} className="max-w-sm bg-gray-100 overflow-hidden shadow-lg">
        <Link>
          <img className="w-full" src='https://images.unsplash.com/photo-1519611103964-90f61a50d3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRlbm5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt={'title'} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">TENNIS</div>
            <p className="font-bold-100 mb-1">View our tennis products</p>
          </div>
        </Link>
        </div>
        </div>
     );
}
 
export default CategoryButtons;