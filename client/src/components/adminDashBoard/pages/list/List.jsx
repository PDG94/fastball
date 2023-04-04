import "./list.scss"
import Sidebar from '../sidebar/Sidebar'
import DataTable from "../dataTable/DataTable"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../../../reduxToolkit/actions/userActions';
import { deleteUser } from './../../../../reduxToolkit/actions/userActions';

function List() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState()
  const [filter, setFilter] = useState('');
  useEffect(() => {
    dispatch(getAllUsers()).then((response) => setUsers(response.payload))

  }, [dispatch])

  

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name', headerName: 'First name', width: 150, renderCell: (params) => {
        return (
          <div className='cellWithImg'>
            <img src={params.row.profilePic} alt="avatar" className='cellImg' />
            {params.row.name}

          </div>
        )
      }
    },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'contry', headerName: 'Contry', width: 90 },
    {
      field: 'active', headerName: 'Active', width: 80, renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.active}`}>
            {`${params.row.active}`}
          </div>
        )
      }
    }
  ];

  const actionColumn = [{
    field: "action", headerName: "Action", width: 200, renderCell: (row) => {
      const handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
      }
      return (
        <div className='cellAction'>
          <div className="viewButton" > <Link to={`/admin/users/${row.id}`}>View</Link> </div>
          <div className="deleteButton" onClick={()=>handleDeleteUser(row.id)}>Delete</div>
        </div>
      )
    }
  }]

  const filteredRows = users && users.filter((row) =>
    Object.values(row).some(
      (value) =>
        value !== null &&
        value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <DataTable filteredRows={filteredRows} users={users} columns={columns} actionColumn={actionColumn} filter={filter} handleFilterChange={handleFilterChange} />
      </div>
    </div>
  )
}

export default List