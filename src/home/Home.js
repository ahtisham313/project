// import { Carousel } from "bootstrap"
import Carousel1 from "../carousel";
import Featured from "../components/Featured";
import Sale from "./Sale";
// import './index.css';
// import { CartProvider } from './CartContext';
// import Sale from './Sale';
const Home=()=>{
    return(
        <div>
            <Carousel1/> 
      
            <Featured/>
            <Sale/>
           
        </div>
    )
}  
export default Home;