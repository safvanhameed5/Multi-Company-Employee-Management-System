import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../services/axiosConfig';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CreateEmployeeComponent = () => {

    const [name, setName] = useState("");
    const [empid, setEmpid] = useState();
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [joined, setJoined] = useState();
    const [salary, setSalary] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axiosConfig.getEmployeeById(id).then((response) => {
            setName(response.data.name)
            setEmpid(response.data.employee_id)
            setCompany(response.data.company)
            setDepartment(response.data.department)
            setRole(response.data.role)
            setJoined(response.data.joining_date)
            setSalary(response.data.salary)
        }).catch(error => {
        console.log(error)
    })
    }, [])

    const formTitle = () => {
        if(id) {
            return <h1 className='text-center'>Update Employee</h1>
        } else {
            return <h1 className='text-center'>Create Employee</h1>
        }
    }

    const submitButtonTitle = () => {
        if(id) {
            return "Update Employee";
        } else {
            return "Create Employee";
        }
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
    
        const employee = {name, empid, company, department, role, joined, salary}
        //console.log(employee);
    
        if(id) {
            axiosConfig.updateEmployee(id, employee).then((response) => {
                navigate('/employees');
            }).catch(error => {
                console.log(error)
            })
        } else {
            axiosConfig.createEmployee(employee).then((response) => {
            
                //console.log(response.data);
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
    }

  return (
    <div>
		<br /> <br />
		<div className='container mt-3'>
			<div className='row'>
				<div className='card col-md-6 offset-md-3 offset-md-3'>
					{ formTitle() }

					<div className='card-body'>
						<form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Employee Name' 
                                    name="name" 
                                    className='form-control' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>EID</label>
                                <input 
                                    type="text" 
                                    placeholder='Employee ID' 
                                    name="empid" 
                                    className='form-control' 
                                    value={empid} 
                                    onChange={(e) => setEmpid(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Company</label>
                                <input 
                                    type="text" 
                                    placeholder='Company' 
                                    name="company" 
                                    className='form-control' 
                                    value={company} 
                                    onChange={(e) => setCompany(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Department</label>
                                <input 
                                    type="text" 
                                    placeholder='Department' 
                                    name="department" 
                                    className='form-control' 
                                    value={department} 
                                    onChange={(e) => setDepartment(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Role</label>
                                <input 
                                    type="text" 
                                    placeholder='Employee Role' 
                                    name="role" 
                                    className='form-control' 
                                    value={role} 
                                    onChange={(e) => setRole(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Joined</label>
                                <input 
                                    type="text" 
                                    placeholder='Employee Role' 
                                    name="joined" 
                                    className='form-control' 
                                    value={joined} 
                                    onChange={(e) => setJoined(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Salary</label>
                                <input 
                                    type="text" 
                                    placeholder='Salary' 
                                    name="salary" 
                                    className='form-control' 
                                    value={salary} 
                                    onChange={(e) => setSalary(e.target.value)}
                                ></input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>{submitButtonTitle()}</button>
                            <Link to="/employees" className="btn btn-danger offset-md-1">Go to List Employee</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default CreateEmployeeComponent
