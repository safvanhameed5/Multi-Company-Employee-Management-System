import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/axiosConfig';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
        
    }, [])

    const deleteEmployee = (empId) => {
      //console.log(empId);
      EmployeeService.deleteEmployeeById(empId).then((response) => {
        
        getAllEmployees();
        
      }).catch(error => {
        console.log(error);
      })
    }

    const getAllEmployees = () => {
      EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data);
        //console.log(response.data)
      }).catch(error => {
          console.log(error);
      })
  }

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <table className="table table-bordered table-striped">
        <thead>
            <th>Name</th>
            <th>EID</th>
            <th>Company</th>
            <th>Department</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Salary</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                employees.map(employee =>
                    <tr key = {employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.employee_id}</td>
                        <td>{employee.company}</td>
                        <td>{employee.department}</td>
                        <td>{employee.role}</td>
                        <td>{employee.joining_date}</td>
                        <td>{employee.salary}</td>
                        <td>
                          <Link to={`/edit-employee/${employee.id}`} className='btn btn-info'>Edit</Link>
                          <button onClick={() => deleteEmployee(employee.id)} className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
      <Link to="/create" className="btn btn-primary mb-2">Create Employee</Link>
    </div>
  )
}

export default ListEmployeeComponent
