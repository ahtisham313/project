import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from '../../resources/logo.png';

// const Navigation = () => {
//   return (
//     <div className='navbar'>
//       <div className='flex space-x-4'>
//         <Link
//           to='/'
//         >
//           <img src='/picture/ladylogo.png' alt='logo'  className='logo'/>
//         </Link>
//         <Link
//           to='/featured'

//         >
//           Featured
//         </Link>
//         <Link
//           to='/sale'

//         >
//           sale
//         </Link>
//         <Link
//           to='/about'

//         >
//           about
//         </Link>
//         <Link
//           to='/collection'

//         >
//           Collection
//         </Link>
//         <Link
//           to='/register'

//         >
//           register/login
//         </Link>
//         <Link
//           to='/'

//         >
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navigation;
const Navigation = () => {
const navigate =useNavigate();
  const handleLogin=()=>{
    navigate('/login')
  }
  return (
    <div className="navbar">
      <div className="flex space-x-12">
        <Link to="/" className="logo-link">
          <img src="/picture/ladylogo.png" alt="logo" className="logo" />
        </Link>
        <Link to="/featured" className="nav-link">
          Featured
        </Link>
        <Link to="/sale" className="nav-link">
          Sale
        </Link>
        <Link to="/aboutUs" className="nav-link">
          AboutUs
        </Link>
        <Link to="/collection" className="nav-link">
          Collection
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <button onClick={handleLogin}>Login</button>
        
        <Link to="/contactUs" className="nav-link">
          ContactUs
        </Link>
        <Link to="/addproduct" className="nav-link">
          AddProduct
        </Link>
        {/* <Link to="/productDesc" className="nav-link">
          ProductDesc
        </Link> */}
      </div>
    </div>
  );
};

export default Navigation;
