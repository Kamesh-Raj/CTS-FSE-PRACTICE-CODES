import React, { useState } from 'react';
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <label>SELECT A THEME </label>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <EmployeesList employees={EmployeesData} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
