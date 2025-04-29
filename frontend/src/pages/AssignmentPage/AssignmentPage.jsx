import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { 
    Funnel,
    Plus,
    SquareArrowOutUpRight
} from 'lucide-react';

const AssignmentPage = () => {
  return (
    <div className='bg-light min-vh-100 w-100 row'>
      {/* sidebar */}
      <div className='col-2 p-0 shadow-sm'>
        <Sidebar/>
      </div>
      {/* Assignment page */}
      <div className='col p-5'>
        <div className="min-vh-100 d-flex flex-column align-items-start pt-4">
            <h2>Assignment</h2>
            {/* search, filter and add new */}
            <div className='d-flex align-items-center justify-content-between w-100'>
                {/* search and filter */}
                <div className='d-flex align-items-center gap-2'>
                    <input 
                        type="text"
                        className='form-control border border-secondary'
                        placeholder='Search' 
                    />
                    <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center gap-2">
                        <Funnel size={20}/>
                        Filter
                    </button> 
                </div>
                <button className='btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2'>
                    <Plus />
                    Add new
                </button>
            </div>
            {/* table */}
            <table class="table mt-5 text-start">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Model</th>
                        <th scope="col">Computer Name</th>
                        <th scope="col">Serial Num.</th>
                        <th scope="col">Serial Num.</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>Nathalie Dayao</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><SquareArrowOutUpRight /></td>
                        </tr>
                    </tbody>
                </table>
        </div>
      </div>
    </div>
  )
}

export default AssignmentPage
