import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './component/Signup';
import Signin from './component/Signin';
import Getproduct from './component/Getproducts';
import Addproducts from './component/Addproduct';
import Mpesapayment from './component/Mpesapayment';
import Video from './component/video';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
const App =()=>{
  return(
    <BrowserRouter>
    {/* navigation goes here */}
    <Navbar />
    {/* Routes goes here */}
    <Routes>
      <Route path="/" element={<Getproduct />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addproducts" element={<Addproducts />} />
      <Route path="/Mpesapayment" element={<Mpesapayment />} />
      <Route path="/Video" element={<Video/>}/>


    </Routes>
    {/* footer goes here  */}
    <Footer/>
    </BrowserRouter>
  )
}
export default App 