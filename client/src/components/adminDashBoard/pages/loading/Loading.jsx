import React from 'react'
import gif from '../../../../images/gif.gif';
import './loading.scss'
function Loading() {
  return (
    <div className='divLoading'>
        <h1 className='title'>Loading...</h1>
        <img src={gif} alt=""  className='loading'/>
        
    </div>
  )
}

export default Loading