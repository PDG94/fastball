import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../loading/Loading';


function DataTable({filteredRows, users, columns, actionColumn, filter, handleFilterChange}) {

  if (!users || !users[0]) {
    return <div>
      <Loading/>
    </div>
  }
  return (
    <div className='datatable'>

      <div className='search'>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search"
          className='searchInput'
        />
      </div>

      <DataGrid
        rows={filteredRows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className='grid'
      />
    </div>
  )
}

export default DataTable