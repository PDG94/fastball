import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './products.scss'
import DataTable from "../dataTable/DataTable"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../../../../reduxToolkit/actions/productAction';
import { fetchDeleteProduct } from './../../../../reduxToolkit/actions/productAction';
import { toast } from "react-toastify";

function Products() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState()
  const [filter, setFilter] = useState('');
  useEffect(() => {
    dispatch(fetchProduct()).then((response) => setProducts(response.payload))

  }, [])
  console.log({"loop?":products})
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'name', headerName: 'Name', width: 250, renderCell: (params) => {
        return (
          <div className='cellWithImg'>
            <img src={params.row.image} alt="avatar" className='cellImg' />
            {params.row.name}

          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 90 },
    { field: 'price', headerName: 'Price', width: 90 },
    {
      field: 'active', headerName: 'Active', width: 90, renderCell: (params) => {
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
      const handleDeleteProduct = (id) => {
        dispatch(fetchDeleteProduct(id))
      }
      return (
        <div className='cellAction'>
          <div className="viewButton" > <Link to={`/admin/products/${row.id}`}>View</Link> </div>
          <div className="deleteButton" onClick={() => {handleDeleteProduct(row.id) 
          toast.warn("Paused product!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }) 
          window.location.reload()}}>Delete</div>
        </div>
      )
    }
  }]

  const filteredRows = products && products.filter((row) =>
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
    <div className='products'>
      <Sidebar />
      <div className="productsContainer">
        <div className='createProduct'><NavLink className='create' to={'/admin/products/create'}>Create product</NavLink></div>
        <DataTable filteredRows={filteredRows} users={products} columns={columns} actionColumn={actionColumn} filter={filter} handleFilterChange={handleFilterChange} />
      </div>
    </div>
  )
}

export default Products