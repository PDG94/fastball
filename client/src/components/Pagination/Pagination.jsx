import React from 'react'
import style from './Paginado.module.css'

export default function Paginado({productsPerPage, allProducts, pagination}){
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(allProducts/productsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    return(
        <div className={style.mainn}>
            <ul>
                {
                    pageNumbers?.map(number=>{
                        return(
                        <li className='number' key={number}>
                        <b onClick={()=>pagination(number)} >{number}</b>
                        </li>
                        )                        
                    })
                }
            </ul>
        </div> 
    )
}