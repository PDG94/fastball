import React, { useEffect, useState } from 'react'
import { fetchCategory, createCategory, deleteCategory } from './../../../../reduxToolkit/actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../sidebar/Sidebar';
import DataTable from '../dataTable/DataTable';
import { Link, NavLink } from 'react-router-dom';
import './categories.scss'
import { toast } from "react-toastify";

function Categories() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        dispatch(fetchCategory());
    }, [])

    const categories = useSelector((state) => state.category.allCategories);

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'createdAt', headerName: 'Created At', width: 250 }

    ];
   

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: (row) => {
            const hanldeDeleteCategory = (id)=>{
             
                dispatch(deleteCategory(id))
            }
            return (
                <div className='cellAction'>
                    {/* <div className="deleteButton" onClick={() => {
                        hanldeDeleteCategory(row.id)
                        toast.warn("Category Removed!", {
                            position: "bottom-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                        window.location.reload()
                    }}>Delete</div> */}
                </div>
            )
        }
    }]
    const filteredRows = categories && categories.filter((row) =>
        Object.values(row).some(
            (value) =>
                value !== null &&
                value.toString().toLowerCase().includes(filter.toLowerCase())
        )
    );
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const handleChange=(e)=>{
        setCategory(e.target.value)
    }
    const handleCreate = (e)=>{
        e.preventDefault()
        dispatch(createCategory({name : category})).then(()=> toast.warn("Category created!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }),
        window.location.reload()
        )
    }

    console.log({category})
    return (
        <div className='categories'>
            <Sidebar />
            <div className="categoriesContainer">
                {/* <div className='createCategory'><NavLink className='create' to={'/admin/products/create'}>Create Category</NavLink></div> */}
                <DataTable filteredRows={filteredRows} users={categories} columns={columns} actionColumn={actionColumn} filter={filter} handleFilterChange={handleFilterChange} />
                <div className='createContainer'>
                    <h1 className='createTitle'>Create Category</h1>
                    <div className='createImput'>
                        <input type="text" value={category} placeholder='New Category' className='input' onChange={handleChange}/>
                        <button className='buttonCreate' onClick={handleCreate}>Create</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories