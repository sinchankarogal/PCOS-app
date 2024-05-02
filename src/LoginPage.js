// // // // LoginPage.js
// // // import React, { useState } from 'react';

// // // const LoginPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     password: ''
// // //   });
// // //   const [errors, setErrors] = useState({});
  
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value
// // //     });
// // //   };
  
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Perform form validation
// // //     const errors = {};
// // //     if (!formData.username) {
// // //       errors.username = 'Username is required';
// // //     }
// // //     if (!formData.password) {
// // //       errors.password = 'Password is required';
// // //     }
// // //     // If there are errors, set them in state
// // //     if (Object.keys(errors).length > 0) {
// // //       setErrors(errors);
// // //     } else {
// // //       // Submit the form
// // //       console.log('Submitting form:', formData);
// // //       // You can perform further actions like making an API call for authentication
// // //     }
// // //   };
  
// // //   return (
// // //     <div>
// // //       <h2>Login Page</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>Username:</label>
// // //           <input
// // //             type="text"
// // //             name="username"
// // //             value={formData.username}
// // //             onChange={handleChange}
// // //           />
// // //           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Password:</label>
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //           />
// // //           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
// // //         </div>
// // //         <button type="submit">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;


// // // LoginPage.js
// // import React, { useState } from 'react';
// // import './LoginPage.css'

// // const LoginPage = ({ history }) => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const [errors, setErrors] = useState({});
  
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };
  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform form validation
// //     const errors = {};
// //     if (!formData.username) {
// //       errors.username = 'Username is required';
// //     }
// //     if (!formData.password) {
// //       errors.password = 'Password is required';
// //     }
// //     // If there are errors, set them in state
// //     if (Object.keys(errors).length > 0) {
// //       setErrors(errors);
// //     } else {
// //       // Redirect to home page upon successful login
// //       history.push('/home');
// //     }
// //   };
  
// //   return (
// //     <div>
// //       <h2>Login Page</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //           />
// //           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //           />
// //           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;


// // import React, { useState } from 'react';
// // import InformationalPages from './InformationalPages';
// // import { Route, useNavigate } from 'react-router-dom'; // Importing useNavigate instead of history

// // import './LoginPage.css';

// // const LoginPage = () => { // Removed history from props
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate(); // Using useNavigate hook to navigate
  
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };
  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform form validation
// //     const errors = {};
// //     if (!formData.username) {
// //       errors.username = 'Username is required';
// //     }
// //     if (!formData.password) {
// //       errors.password = 'Password is required';
// //     }
// //     // If there are errors, set them in state
// //     if (Object.keys(errors).length > 0) {
// //       setErrors(errors);
// //     } else {
// //       // Redirect to home page upon successful login
// //       // history.push('/home');
// //       navigate('/information'); // Navigating to '/information' route
// //     }
// //   };
  
// //   return (
// //     <div>
// //       <h2>Login Page</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //           />
// //           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //           />
// //           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// import React, { useState } from 'react';
// import InformationalPages from './InformationalPages';
// import { Route, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation
//     const errors = {};
//     if (!formData.username) {
//       errors.username = 'Username is required';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     }
//     // If there are errors, set them in state
//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//     } else {
//       // Redirect to home page upon successful login
//       navigate('/information');
//     }
//   };
  
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>Login Page</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // navigate('/information');
      if (formData.username === 'username' && formData.password === 'password') {
        navigate('/information');
      } else {
        setErrors({ login: 'Invalid username or password' });
        alert("Invalid username and password");
      }
    }
  };
  
  return (
    <div className="login-container">
      <h2 className="login-header">Login to PCOS Information Portal</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
