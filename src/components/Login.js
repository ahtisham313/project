// // import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { addLogin } from "../service/api";
// import { useState } from "react";
// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from "@material-tailwind/react";
// // import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const user = {
//       username: username,
//       password: password,
//     };

//     try {
//       await addLogin(user);
//       console.log('Login data sent successfully');
//       // Redirect or perform any other actions after successful login
//     } catch (error) {
//       console.log('Failed to send login data', error);
//     }
//   };

// // const Login = () => {
// //   const user = {
// //     username: "",
// //     password: "",
// //   };
// //   addLogin(user);
// //   // setUsername("");
// //   // setEmail("");
// //   // setPassword("");
// //   // setConfirmPassword("");

// //   // const navigate = useNavigate();
//   return (
//     <Card
//       color="transparent"
//       shadow={false}
//       style={{ justifyContent: "center" }}
//       // onClick={(e) => navigate("/login")}
//     >
//       <Typography variant="h4" color="blue-gray">
//         Login
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Enter name and password
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-4 flex flex-col gap-6">
//           <Input size="lg" label="Name" />
//           {/* <Input size="lg" label="Email" /> */}
//           <Input type="password" size="lg" label="Password" />
//         </div>
//         <Checkbox
//           label={
//             <Typography
//               variant="small"
//               color="gray"
//               className="flex items-center font-normal"
//             >
//               I agree the
//               <Link
//                 className="font-medium transition-colors hover:text-blue-500"
//                 to="/"
//               >
//                 &nbsp;Terms and Conditions
//               </Link>
//             </Typography>
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           Login
//         </Button>
//       </form>
//     </Card>
//   );
// };
// export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { addLogin } from '../service/api';

// import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // const handleLogin = async () => {
//   //   const login = {
//   //     username: username,
//   //     password: password,
//   //   };

//   //   try {
//   //     await addLogin(login);
//   //     console.log('Login data sent successfully');
//   //     // Redirect or perform any other actions after successful login
//   //   } catch (error) {
//   //     console.log('Failed to send login data', error);
//   //   }
//   // };

//   return (
//     <Card
//       color="transparent"
//       shadow={false}
//       style={{ justifyContent: "center" }}
//     >
//       <Typography variant="h4" color="blue-gray">
//         Login
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Enter name and password
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-4 flex flex-col gap-6">
//           <Input
//             size="lg"
//             label="Name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <Input
//             type="password"
//             size="lg"
//             label="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <Checkbox
//           label={
//             <Typography
//               variant="small"
//               color="gray"
//               className="flex items-center font-normal"
//             >
//               I agree the
//               <Link
//                 className="font-medium transition-colors hover:text-blue-500"
//                 to="/"
//               >
//                 &nbsp;Terms and Conditions
//               </Link>
//             </Typography>
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth onClick={handleLogin}>
//           Login
//         </Button>
//       </form>
//     </Card>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { addLogin } from "../service/api";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    // email: "",
    password: "",
    // confirmPassword: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    addLogin(user);
    console.log(user);
    setUser({
      username: "",
      // email: "",
      password: "",
      // confirmPassword: "",
    });
  }

  function handleInputChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
          style={styles.input}
        />
        {/* <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          style={styles.input}
        /> */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          style={styles.input}
        />
        {/* <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleInputChange}
          style={styles.input}
        /> */}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
export default Login;
