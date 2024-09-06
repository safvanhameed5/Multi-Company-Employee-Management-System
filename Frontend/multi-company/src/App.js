// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Company from './pages/Company';
import Attendence from './pages/Attendence';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
    <Router>
        <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/company" element={<Company />} />
              <Route path="/attendence" element={<Attendence />} />
              <Route path="/create" element={<CreateEmployeeComponent />} />
            </Route>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
