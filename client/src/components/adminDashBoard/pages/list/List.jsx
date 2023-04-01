import "./list.scss"
import Sidebar from '../sidebar/Sidebar'
import DataTable from "../dataTable/DataTable"


function List() {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
            <DataTable/>
        </div>
    </div>
  )
}

export default List