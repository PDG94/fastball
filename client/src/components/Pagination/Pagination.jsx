import React from 'react'
import { useSelector } from 'react-redux'
// import style from './Paginado.module.css'

export default function Paginado({productsPerPage, allProducts, pagination}){
    const { currentPage } = useSelector( state => state.product )
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(allProducts/productsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    const styleButtonNav = (number)=> {
        return currentPage === number

                ? 'rounded-md drop-shadow-lg text-white bg-green-400 py-1.5 px-3 text-xl my-0 mx-2.5 inline cursor-pointer'
                : 'rounded-md drop-shadow-lg text-white bg-green-300 hover:bg-green-400 py-1.5 px-3 text-xl my-0 mx-2.5 inline cursor-pointer'
    }
    return(
        <div className='flex justify-center items-center' >
            <ul>
                {
                    pageNumbers?.map(number=>{
                        return(
                        <li className= { styleButtonNav(number) } style={{outline: '1px solid white'}} key={number} onClick={()=>pagination(number)}>
                        <b >{number}</b>
                        </li>
                        )                        
                    })
                }
            </ul>
        </div> 
    )
}