// import React, { useState } from 'react';
// import axios from 'axios'; // Assuming you're using Axios for API calls

// const AttendanceRecordForm = () => {
//   const [formData, setFormData] = useState({
//     studentId: '',
//     name: '',
//     attendanceRecord: [{   date: '', status: '' }], // Initialize with one empty object
//   });
//   const [studentID, setstudentID] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');
//   const [status, setStatus] = useState('');
//   const [attendance, setAttendance] = useState([{   date: '', status: '' }]);
//   // const [formData, setFormData] = useState({
//   //   studentId: '',
//   //   name: '',
//   //   attendanceRecord: [{   date: '', status: '' }], // Initialize with one empty object
//   // });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('attendanceRecord')) {
//       const [recordIndex, fieldName] = name.split('.'); // Extract record index and field name
  
//       // Validate status before updating
//       if (fieldName === 'status' && !(value === 'present' || value === 'absent')) {
//         console.error('Invalid status value:', value);
//         alert('Please select a valid status (Present or Absent).');
//         return; // Prevent further processing if invalid status
//       }
  
//       setFormData({
//         ...formData,
//         attendanceRecord: [
//           ...formData.attendanceRecord.slice(0, recordIndex),
//           {
//             ...formData.attendanceRecord[recordIndex],
//             [fieldName]: value,
//           },
//           ...formData.attendanceRecord.slice(recordIndex + 1),
//         ],
//       });
//     } else {
//       // Handle other form field updates
//       setFormData({
//         ...formData,
//         [name]: value === '' ? '' : e.target.type === 'date' ? new Date(value) : value,
//       });
//     }
//   };

//   const handleStudentIdChange = (e) =>{
//     setstudentID(e.target.value)
//   }
//   const handleNameChange = (e) =>{
//     setName(e.target.value)
//   }
//   const onDateChange = (e) =>{
//     setDate(e.target.value)
//   }
//   const onStatusChange = (e) =>{
//     setStatus(e.target.value)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Refined validation logic
//     console.log(formData)
//     console.log(formData.studentId.trim())
//     console.log(formData.name.trim())
//     console.log(formData.attendanceRecord[0].date)
//     console.log(formData.attendanceRecord[0].status)

//     if (!formData || !formData.studentId.trim() || !formData.name.trim() || !formData.attendanceRecord.every((record) => record.date && record.status)) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     const attendanceData = {
//       studentId: formData.studentId,
//       name: formData.name,
//       attendanceRecord: formData.attendanceRecord,
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/attendance', attendanceData); // Assuming backend API endpoint
//       console.log('Attendance record added successfully:', response.data);
//       setFormData({
//         studentId: '',
//         name: '',
//         attendanceRecord: [{ date: '', status: '' }], // Reset to one empty object
//       });
//     } catch (error) {
//       console.error('Error adding attendance record:', error);
//       alert('An error occurred while adding the record. Please try again.');
//     }
//   };
//   return (
//     <div className='text-3xl'>
//       <h2 className='text-center m-8 font-bold'>Add Attendance Record</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-1/2 mx-auto mt-11">
//         {/* ... existing form fields ... */}
//         <div className="flex items-center">
//           <label htmlFor="studentId" className="w-1/4  font-medium mr-4">Student ID:</label>
//           <input type="number" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
//         </div>
//         <div className="flex items-center">
//           <label htmlFor="name" className="w-1/4  font-medium mr-4">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 justify-self-end" />
//         </div>
//         <div className="flex items-center">
          
//           <label htmlFor="date" className="w-1/4  font-medium mr-4">Date:</label>
//           <input  type="date"
//                   id="date"  // Can use a unique ID here
//                   name="attendanceRecord[0].date" // Access date property of the first record
//                   value={formData.attendanceRecord[0].date} // Set value from the state
//                   onChange={handleChange}
//                   required
//                   className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 justify-self-end" />

//         </div>
//         <div className="flex items-center">
//           <label htmlFor="status" className="w-1/4  font-medium mr-4">Status:</label>
//           <select id="status" name="attendanceRecord[0].status" value={formData.attendanceRecord[0].status} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 justify-self-end">
//             <option value="present">Present</option>
//             <option value="absent">Absent</option>
//           </select>
//         </div>
//         <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">Add Record</button>
//       </form>
//     </div>
//   );
// };

// export default AttendanceRecordForm;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AttendanceRecordForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    date: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/attendance', formData);
      console.log('Attendance record added successfully');
      // Reset form fields after successful submission
      setFormData({ studentId: '', name: '', date: '' });
    } catch (error) {
      console.error('Error adding attendance record:', error);
    }
  };

  const handleAddRecordClick = () => {
    // Navigate to the "/add" route when the button is clicked
    navigate('/');
  };


  return (
    <div className='text-3xl'>
      <h2 className='text-center m-8 font-bold'>Add Attendance Record</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-1/2 mx-auto mt-11">
        <div className="flex items-center">
          <label htmlFor="studentId" className="w-1/4  font-medium mr-4">Student ID:</label>
          <input type="number" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex items-center">
          <label htmlFor="name" className="w-1/4  font-medium mr-4">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 justify-self-end" />
        </div>
        <div className="flex items-center">
          <label htmlFor="date" className="w-1/4  font-medium mr-4">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 justify-self-end" />
        </div>
        <button type="submit" className=" text-center items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
          Add Record
        </button>
      </form>

      <div className='mt-16 flex items-center justify-center'>

      <button onClick={handleAddRecordClick} className='text-center items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>See attendance details</button> {/* Button to navigate to the "/add" route */}
      </div>

    </div>
  );
};

export default AttendanceRecordForm;
