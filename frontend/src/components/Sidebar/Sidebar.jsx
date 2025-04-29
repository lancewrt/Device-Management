import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='vh-100 w-100 bg-light p-5 d-flex flex-column align-items-start'>
      <h1 className='text-danger fw-bold'>All<span className='text-success'>Value</span></h1>

      {/* menu */}
      <ul className='list-unstyled text-start w-100 menu'>
        <li className='p-2'>
            <a href="">Assignment</a>
        </li>
        <li className='p-2'>
            <a href="">Devices</a>
        </li>
        <li className='p-2'>
            <a href="">Turnover</a>
        </li>
    </ul>
    
      
    </div>
  )
}

export default Sidebar
