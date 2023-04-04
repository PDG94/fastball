import React from 'react'
import { Sidebar } from 'react-feather'
import './productCreate.scss'
import ContainerRegiterPRoduct from '../../../RegisterProduct/ContainerRegiterPRoduct'

function ProductCreate() {
  return (
    <div className='productCreate'>
        <div className="createContainer">
            <ContainerRegiterPRoduct/>
        </div>
    </div>
  )
}

export default ProductCreate