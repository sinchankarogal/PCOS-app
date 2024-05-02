// // PeriodTracker.js
// import React, { useState } from 'react';
// import './PeriodTracker.css'; // Import the CSS file

// const PeriodTracker = () => {
//   const [periods, setPeriods] = useState([]);
//   const [formData, setFormData] = useState({
//     startDate: '',
//     endDate: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPeriods([...periods, formData]);
//     setFormData({
//       startDate: '',
//       endDate: ''
//     });
//   };

//   const generateCalendarGrid = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const dates = [];

//     // Generate dates for the entire month
//     const currentDate = new Date(start.getFullYear(), start.getMonth(), 1);
//     while (currentDate.getMonth() === start.getMonth()) {
//       dates.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1);
//     }

//     return dates.map((date, index) => {
//       const isInPeriod = date >= start && date <= end;
//       return (
//         <div key={index} className={`calendar-cell ${isInPeriod ? 'highlighted-date' : ''}`}>
//           {date.getDate()}
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <h2>Period Tracker</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label>End Date:</label>
//           <input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
//             required
//           />
//         </div>
//         <button type="submit">Add Period</button>
//       </form>
//       <div>
//         <h3>Periods Tracked:</h3>
//         {periods.map((period, index) => (
//           <div key={index}>
//             <h4>Period {index + 1}</h4>
//             <div className="calendar-grid">
//               {generateCalendarGrid(period.startDate, period.endDate)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PeriodTracker;

import React, { useState } from 'react';
import './PeriodTracker.css'; // Import the CSS file

const PeriodTracker = () => {
  const [periods, setPeriods] = useState([]);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeriods([...periods, formData]);
    setFormData({
      startDate: '',
      endDate: ''
    });
  };

  const generateCalendarGrid = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];

    // Generate dates for the entire month
    const currentDate = new Date(start.getFullYear(), start.getMonth(), 1);
    while (currentDate.getMonth() === start.getMonth()) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates.map((date, index) => {
      const isInPeriod = date >= start && date <= end;
      return (
        <div key={index} className={`calendar-cell ${isInPeriod ? 'highlighted-date' : ''}`}>
          {date.getDate()}
        </div>
      );
    });
  };

  return (
    <div className="period-tracker-container">
      <h2>Period Tracker</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="button">Add Period</button>
      </form>
      <div>
        <h3>Periods Tracked:</h3>
        {periods.map((period, index) => (
          <div key={index}>
            <h4>Period {index + 1}</h4>
            <div className="calendar-grid">
              {generateCalendarGrid(period.startDate, period.endDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodTracker;
