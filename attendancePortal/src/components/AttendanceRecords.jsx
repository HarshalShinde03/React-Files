// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AttendanceComponent = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);

//   useEffect(() => {
//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/attendance');
//         const formattedRecords = response.data.map((record) => ({
//           ...record,
//           // Access the first element of the attendanceRecord array
//           date: record.attendanceRecord[0].date,
//           status: record.attendanceRecord[0].status,
//         }));
//         setAttendanceRecords(formattedRecords);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//       }
//     };

//     fetchAttendanceRecords();
//   }, []);

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
//     const day = date.getDate().toString().padStart(2, "0");
//     return `${day}-${month}-${year}`;
//   };

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.map((record) => (
//             <tr key={record._id}>
//               <td>{record.studentId}</td>
//               <td>{record.name}</td>
//               <td>{formatDate(record.date)}</td>
//               <td>{record.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AttendanceComponent;

// Inside a React component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AttendanceComponent = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axios.get('http://localhost:3000/attendance/details');
        setAttendanceRecords(response.data);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };

    fetchAttendanceRecords();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  const handleAddRecordClick = () => {
    // Navigate to the "/add" route when the button is clicked
    navigate('/add');
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record._id} className='text-center'>
              <td>{record.id}</td>
              <td>{record.name}</td>
              {/* Display dates vertically with slight horizontal shift */}
              <td style={{ paddingLeft: '1em' }}>
                {record.dates.map((date) => (
                  <span key={date}>
                    {formatDate(date)}
                    <hr />
                    {/* <br /> Add line break for vertical display */}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex items-center justify-center'>

      <button onClick={handleAddRecordClick} className='text-center items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>New Student Attendance</button> {/* Button to navigate to the "/add" route */}
      </div>
    </>
  );
};

export default AttendanceComponent;

