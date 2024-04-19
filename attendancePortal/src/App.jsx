// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import AttendanceRecords from './components/AttendanceRecords';
import AttendanceRecordForm from './components/AttendanceRecordForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<AttendanceRecords />} /> {/* Use element prop instead of component */}
          <Route path="/add" element={<AttendanceRecordForm />} /> {/* Use element prop instead of component */}
          {/* Additional routes can be added for editing records */}
        </Routes> {/* Replace Switch with Routes */}
      </div>
    </Router>
  );
};

export default App;
