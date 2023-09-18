import React from 'react'

const Map = () => {
    let allStudents = [
        {firstName: 'John', lastName: 'Peace', age: 20},
        {firstName: 'John', lastName: 'Peace', age: 20},
        {firstName: 'John', lastName: 'Peace', age: 20},

    ]

  return (
    <div className='container-fluid col-8 m-5'>
        <table className='table table-bordered table-dark table-striped table-hover'>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allStudents.map((items, index ) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{items.firstName}</td>
                            <td>{items.lastName}</td>
                            <td>{items.age}</td>
                            <td >
                                <button className='m-2 w-25 rounded-pill btn btn-outline-warning'>Edit</button>
                                <button className='m-2 w-25 border-rounded btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Map