import axios from 'axios'

const EMPLOYEE_REST_API_URL = "http://127.0.0.1:8000/employee/";
//const EMPLOYEE_REST_API_URL = "http://localhost:8080/empapi/employee/";

class axiosConfig {

    getAllEmployees() {
        return axios.get(EMPLOYEE_REST_API_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_REST_API_URL, employee);
    }

    getEmployeeById(empId) {
        return axios.get(EMPLOYEE_REST_API_URL + empId + "/");
    }
    
    updateEmployee(empId, employee) {
        return axios.put(EMPLOYEE_REST_API_URL + empId + "/", employee);
    }

    deleteEmployeeById(empId) {
        return axios.delete(EMPLOYEE_REST_API_URL + empId + "/");
    }

}
export default new axiosConfig();