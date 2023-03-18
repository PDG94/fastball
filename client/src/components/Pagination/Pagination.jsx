import React from 'react'

export default function Paginado({productsPerPage, allProducts, pagination}){
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(allProducts/productsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    return(
        <div className="">
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