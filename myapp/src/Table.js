// App.js
import React, { useState } from 'react';
import './App.css';

function Table() {
  const [employeeData, setEmployeeData] = useState([]);

  const handleSubmit = (data) => {
    setEmployeeData([...employeeData, data]);
  };

  return (
    <div className="App">
      <h1>Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Age:</label>
        <input type="number" name="age" required />
        <label>Address:</label>
        <input type="text" name="address" required />
        <label>Department:</label>
        <select name="department" required>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="IT">IT</option>
        </select>
        <label>Salary:</label>
        <input type="number" name="salary" required />
        <label>Marital Status:</label>
        <input type="checkbox" name="maritalStatus" />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.address}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.maritalStatus ? 'Married' : 'Single'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
