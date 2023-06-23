// import {
//     Card,
//     Input,
//     Checkbox,
//     Button,
//     Typography,
//   } from "@material-tailwind/react";
// const Register=()=>{

//   return (
//     <Card color="transparent" shadow={false}>
//       <Typography variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Enter your details to register.
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-4 flex flex-col gap-6">
//           <Input size="lg" label="Name" />
//           <Input size="lg" label="Email" />
//           <Input type="password" size="lg" label="Password" />
//         </div>
//         <Checkbox
//           label={
//             (
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="flex items-center font-normal"
//               >
//                 I agree the
//                 <a
//                   href="#"
//                   className="font-medium transition-colors hover:text-blue-500"
//                 >
//                   &nbsp;Terms and Conditions
//                 </a>
//               </Typography>
//             )
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           Register
//         </Button>
//         <Typography color="gray" className="mt-4 text-center font-normal">
//           Already have an account?{" "}
//           <a
//             href="#"
//             className="font-medium text-blue-500 transition-colors hover:text-blue-700"
//           >
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );

// }
// export default Register;

import React, { useState } from "react";
import { addApplicant } from "../service/api";

const Register = () => {
  // const history=useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // async function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const user = {
  //        username: "",
  //        email: "",
  //       password: "",
  //      confirmPassword: "",
  //      };
  //   try {
  //     await addApplicant(user);
  //     console.log("User registered successfully!");

  //     // Reset the form fields
  //     setUsername("");
  //     setEmail("");
  //     setPassword("");
  //     setConfirmPassword("");

  //     // Redirect to another page if needed
  //     // history.push("/success"); // uncomment if using react-router-dom
  //   } catch (error) {
  //     console.error("Error registering user:", error);
  //   }
  // }

  // async
  function handleFormSubmit(e) {
    e.preventDefault();

    // async function submit(e){
    // e.preventDefault();
    const user = {
      username: "sham",
      email: "ah@gmail.com",
      password: "123",
      confirmPassword: "123",
    };
    addApplicant(user);

    // Perform the desired action with the form data
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("confirmPassword:",confirmPassword)

    // Reset the form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
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

export default Register;

/*import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Register;*/
