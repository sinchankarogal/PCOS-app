// // import React, { useState } from 'react';
// // import './SymtomTracker.css'

// // const SymptomTracker = () => {
// //   const [symptoms, setSymptoms] = useState([]);
// //   const [formData, setFormData] = useState({
// //     symptom: '',
// //     severity: '',
// //     notes: ''
// //   });
// //   const [selectedSymptom, setSelectedSymptom] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSymptoms([...symptoms, formData]);
// //     setFormData({
// //       symptom: '',
// //       severity: '',
// //       notes: ''
// //     });
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleRadioChange = (e) => {
// //     const selectedSymptom = e.target.value;
// //     const explanation = getExplanation(selectedSymptom);
// //     setSelectedSymptom({ name: selectedSymptom, explanation });
// //   };

// //   const getExplanation = (symptom) => {
// //     switch (symptom) {
// //       case 'irregular_periods':
// //         return 'Irregular periods are a common symptom of PCOS, caused by hormonal imbalances.';
// //       case 'weight_gain':
// //         return 'Weight gain is often associated with PCOS due to insulin resistance and hormonal changes.';
// //       case 'excess_hair_growth':
// //         return 'Excess hair growth (hirsutism) is a symptom caused by increased levels of male hormones (androgens).';
// //       case 'acne':
// //         return 'Acne can occur due to increased androgen levels in PCOS.';
// //       default:
// //         return '';
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: 'center' }}>
// //       <h2>Symptom Tracker</h2>
// //       <form onSubmit={handleSubmit} style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
// //         <div style={{ marginBottom: '20px' }}>
// //           <label>Symptom:</label>
// //           <div>
// //             <input
// //               type="radio"
// //               name="symptom"
// //               value="irregular_periods"
// //               checked={formData.symptom === 'irregular_periods'}
// //               onChange={handleChange}
// //               required
// //             />
// //             <label>Irregular Periods</label>
// //           </div>
// //           <div>
// //             <input
// //               type="radio"
// //               name="symptom"
// //               value="weight_gain"
// //               checked={formData.symptom === 'weight_gain'}
// //               onChange={handleChange}
// //             />
// //             <label>Weight Gain</label>
// //           </div>
// //           <div>
// //             <input
// //               type="radio"
// //               name="symptom"
// //               value="excess_hair_growth"
// //               checked={formData.symptom === 'excess_hair_growth'}
// //               onChange={handleChange}
// //             />
// //             <label>Excess Hair Growth</label>
// //           </div>
// //           <div>
// //             <input
// //               type="radio"
// //               name="symptom"
// //               value="acne"
// //               checked={formData.symptom === 'acne'}
// //               onChange={handleChange}
// //             />
// //             <label>Acne</label>
// //           </div>
// //         </div>
// //         <div style={{ marginBottom: '20px' }}>
// //           <label>Severity:</label>
// //           <input
// //             type="text"
// //             name="severity"
// //             value={formData.severity}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div style={{ marginBottom: '20px' }}>
// //           <label>Notes:</label>
// //           <textarea
// //             name="notes"
// //             value={formData.notes}
// //             onChange={handleChange}
// //             style={{ minHeight: '100px', minWidth: '200px', padding: '5px' }}
// //           ></textarea>
// //         </div>
// //         <button type="submit" style={{ padding: '8px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Symptom</button>
// //       </form>
      
// //       {selectedSymptom && (
// //         <div style={{ marginTop: '20px' }}>
// //           <h3>Selected Symptom:</h3>
// //           <p><strong>Symptom:</strong> {selectedSymptom.name}</p>
// //           <p><strong>Explanation:</strong> {selectedSymptom.explanation}</p>
// //         </div>
// //       )}

// //       <div style={{ marginTop: '20px' }}>
// //         <h3>Symptoms Tracked:</h3>
// //         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
// //           <thead>
// //             <tr>
// //               <th>Symptom</th>
// //               <th>Severity</th>
// //               <th>Notes</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {symptoms.map((symptom, index) => (
// //               <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
// //                 <td>{symptom.symptom}</td>
// //                 <td>{symptom.severity}</td>
// //                 <td>{symptom.notes}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SymptomTracker;


// import React, { useState } from 'react';
// import './SymtomTracker.css';

// const SymptomTracker = () => {
//   const [symptoms, setSymptoms] = useState([]);
//   const [formData, setFormData] = useState({
//     symptom: '',
//     severity: '',
//     notes: ''
//   });
//   const [selectedSymptom, setSelectedSymptom] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSymptoms([...symptoms, formData]);
//     setFormData({
//       symptom: '',
//       severity: '',
//       notes: ''
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleRadioChange = (e) => {
//     const selectedSymptom = e.target.value;
//     const explanation = getExplanation(selectedSymptom);
//     setSelectedSymptom({ name: selectedSymptom, explanation });
//   };

//   const getExplanation = (symptom) => {
//     switch (symptom) {
//       case 'irregular_periods':
//         return 'Irregular periods are a common symptom of PCOS, caused by hormonal imbalances.';
//       case 'weight_gain':
//         return 'Weight gain is often associated with PCOS due to insulin resistance and hormonal changes.';
//       case 'excess_hair_growth':
//         return 'Excess hair growth (hirsutism) is a symptom caused by increased levels of male hormones (androgens).';
//       case 'acne':
//         return 'Acne can occur due to increased androgen levels in PCOS.';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Symptom Tracker</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="radio-group">
//           <label className="radio-label">Symptom:</label>
//           <div>
//             <input
//               type="radio"
//               name="symptom"
//               value="irregular_periods"
//               checked={formData.symptom === 'irregular_periods'}
//               onChange={handleChange}
//               required
//               className="radio-input"
//             />
//             <label>Irregular Periods</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="symptom"
//               value="weight_gain"
//               checked={formData.symptom === 'weight_gain'}
//               onChange={handleChange}
//               className="radio-input"
//             />
//             <label>Weight Gain</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="symptom"
//               value="excess_hair_growth"
//               checked={formData.symptom === 'excess_hair_growth'}
//               onChange={handleChange}
//               className="radio-input"
//             />
//             <label>Excess Hair Growth</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="symptom"
//               value="acne"
//               checked={formData.symptom === 'acne'}
//               onChange={handleChange}
//               className="radio-input"
//             />
//             <label>Acne</label>
//           </div>
//         </div>
//         <div className="section">
//           <label className="label">Severity:</label>
//           <input
//             type="text"
//             name="severity"
//             value={formData.severity}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//         </div>
//         <div className="section">
//           <label className="label">Notes:</label>
//           <textarea
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             className="textarea-field"
//           ></textarea>
//         </div>
//         <button type="submit" className="button">Add Symptom</button>
//       </form>
      
//       {selectedSymptom && (
//         <div className="section">
//           <h3>Selected Symptom:</h3>
//           <p><strong>Symptom:</strong> {selectedSymptom.name}</p>
//           <p><strong>Explanation:</strong> {selectedSymptom.explanation}</p>
//         </div>
//       )}

//       <div className="table-container">
//         <h3>Symptoms Tracked:</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Symptom</th>
//               <th>Severity</th>
//               <th>Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {symptoms.map((symptom, index) => (
//               <tr key={index}>
//                 <td>{symptom.symptom}</td>
//                 <td>{symptom.severity}</td>
//                 <td>{symptom.notes}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SymptomTracker;


import React, { useState } from 'react';
import './SymtomTracker.css';

const SymptomTracker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [formData, setFormData] = useState({
    symptom: '',
    severity: '',
    notes: ''
  });
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSymptoms([...symptoms, formData]);
    setFormData({
      symptom: '',
      severity: '',
      notes: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e) => {
    const selectedSymptom = e.target.value;
    const explanation = getExplanation(selectedSymptom);
    setSelectedSymptom({ name: selectedSymptom, explanation });
  };

  const getExplanation = (symptom) => {
    switch (symptom) {
      case 'irregular_periods':
        return 'Irregular periods are a common symptom of PCOS, caused by hormonal imbalances.';
      case 'weight_gain':
        return 'Weight gain is often associated with PCOS due to insulin resistance and hormonal changes.';
      case 'excess_hair_growth':
        return 'Excess hair growth (hirsutism) is a symptom caused by increased levels of male hormones (androgens).';
      case 'acne':
        return 'Acne can occur due to increased androgen levels in PCOS.';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Symptom Tracker</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="radio-group">
          <label className="radio-label">Symptom:</label>
          <div>
            <input
              type="radio"
              name="symptom"
              value="irregular_periods"
              checked={formData.symptom === 'irregular_periods'}
              onChange={handleChange}
              className="radio-input"
            />
            <label>Irregular Periods</label>
          </div>
          <div>
            <input
              type="radio"
              name="symptom"
              value="weight_gain"
              checked={formData.symptom === 'weight_gain'}
              onChange={handleChange}
              className="radio-input"
            />
            <label>Weight Gain</label>
          </div>
          <div>
            <input
              type="radio"
              name="symptom"
              value="excess_hair_growth"
              checked={formData.symptom === 'excess_hair_growth'}
              onChange={handleChange}
              className="radio-input"
            />
            <label>Excess Hair Growth</label>
          </div>
          <div>
            <input
              type="radio"
              name="symptom"
              value="acne"
              checked={formData.symptom === 'acne'}
              onChange={handleChange}
              className="radio-input"
            />
            <label>Acne</label>
          </div>
        </div>
        <div>
          <label className="label">Severity:</label>
          <input
            type="text"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label className="label">Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
        </div>
        <button type="submit" className="button">Add Symptom</button>
      </form>
      
      {selectedSymptom && (
        <div>
          <h3>Selected Symptom:</h3>
          <p><strong>Symptom:</strong> {selectedSymptom.name}</p>
          <p><strong>Explanation:</strong> {selectedSymptom.explanation}</p>
        </div>
      )}

      <div className="table-container">
        <h3>Symptoms Tracked:</h3>
        <table>
          <thead>
            <tr>
              <th>Symptom</th>
              <th>Severity</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {symptoms.map((symptom, index) => (
              <tr key={index}>
                <td>{symptom.symptom}</td>
                <td>{symptom.severity}</td>
                <td>{symptom.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SymptomTracker;
