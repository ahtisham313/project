import React, { useState } from 'react';
import { addLogin } from '../service/api';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    // email: "",
    password: '',
    // confirmPassword: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    addLogin(user).then((res) => {
      localStorage.setItem('token', res.data.token);
      console.log(res);
    });

    setUser({
      username: '',
      // email: "",
      password: '',
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
          type='text'
          name='username'
          placeholder='Username'
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
          type='password'
          name='password'
          placeholder='Password'
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
        <button type='submit' style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
export default Login;
