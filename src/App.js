// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
// import Carousel from './carousel';
import Featured from "./components/Featured";
// import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Sale from "./home/Sale";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AddProduct from "./components/AddProduct";


// import ProductDesc from "./components/ProductDesc";
// import CheckOut from "./CheckOut";

// import { CartProvider } from './CartContext';

function App() {
  return (
    <div>
      <Header />
      {/* <Home/> */}
      {/* <Carousel/>   */}
      {/* <Featured/> */}

      {/* <CartProvider>
      <Sale />
    </CartProvider> */}
    {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/featured" element={<Featured />} />
        <Route exact path="/sale" element={<Sale />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs/>} /> 

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />

        {/* <Route path="/productDesc" element={<ProductDesc />} /> */}

        {/* <Route path="/checkout" element={<CheckOut />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
