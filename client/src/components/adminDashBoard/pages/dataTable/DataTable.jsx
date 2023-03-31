import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../../../reduxToolkit/actions/userActions';


function DataTable() {
    const dispatch = useDispatch(); 
    const [users, setUsers]=useState()
    useEffect(()=>{
        dispatch(getAllUsers()).then((response)=> setUsers(response.payload))
     
    }, [dispatch])

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'First name', width: 180, renderCell : (params)=>{
        return (
          <div className='cellWithImg'>
            <img src={params.row.profilePic} alt="avatar" className='cellImg'/>
            {params.row.name}
            {console.log(params)}
          </div>
        )
      }},
      { field: 'lastName', headerName: 'Last name', width: 120},
      { field: 'email', headerName: 'Email', width: 250 },
      { field: 'contry', headerName: 'Contry', width: 90 },
      { field: 'active', headerName: 'Active', width: 80, renderCell: (params)=>{
        return (
          <div className={`cellWithStatus ${params.row.active}`}>
            {`${params.row.active}`}
          </div>
        )
      }}      
    ];

    const actionColumn = [{field : "action", headerName: "Action", width:200, renderCell:()=>{
      return (
        <div className='cellAction'>
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }}]

    console.log(users)
    if(!users){
      return <div>Loading...</div>
    }
  return (
    <div className='datatable'>
        <DataGrid
        rows={users}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='grid'
      />
    </div>
  )
}

export default DataTable