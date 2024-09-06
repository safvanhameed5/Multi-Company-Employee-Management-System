// src/pages/Departments.js
import { useEffect, useState } from 'react';
import axios from '../services/axiosConfig';
import './Departments.css';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    company: '',
  });
  const [editDepartment, setEditDepartment] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/department/');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleAddDepartment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/department/', newDepartment);
      setDepartments([...departments, response.data]);
      setNewDepartment({ name: '', company: '' }); // Reset input fields after addition
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const handleEditDepartment = async (id) => {
    try {
      await axios.put(`/department/${id}/`, { name: editName });
      setDepartments(
        departments.map((dept) =>
          dept.id === id ? { ...dept, name: editName } : dept
        )
      );
      setEditDepartment(null);
      setEditName('');
    } catch (error) {
      console.error('Error editing department:', error);
    }
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await axios.delete(`/department/${id}/`);
      setDepartments(departments.filter((dept) => dept.id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <div className="departments">
      <h1>Departments</h1>
      <div className="add-department">
        <form onSubmit={handleAddDepartment}>
          <input
            type="text"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
            placeholder="Add new department"
            required
          />
          {/* Optional: If you have a company input, add this */}
          {/* <input
            type="text"
            value={newDepartment.company}
            onChange={(e) => setNewDepartment({ ...newDepartment, company: e.target.value })}
            placeholder="Company"
          /> */}
          <button type="submit">Add</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>
                {editDepartment === department.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  department.name
                )}
              </td>
              <td>
                {editDepartment === department.id ? (
                  <button onClick={() => handleEditDepartment(department.id)}>
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditDepartment(department.id);
                      setEditName(department.name);
                    }}
                  >
                    Edit
                  </button>
                )}
                <button onClick={() => handleDeleteDepartment(department.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
