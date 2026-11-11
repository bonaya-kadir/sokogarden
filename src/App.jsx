import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './component/Signup';
import Signin from './component/Signin';
import Getproduct from './component/Getproducts';
import Addproducts from './component/Addproduct';
import Mpesapayment from './component/Mpesapayment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App =()=>{
  return(
    <BrowserRouter>
    {/* navigation goes here */}
    <nav className='text-center'>
      <Link to="/" className='btn btn-danger m-3'>Getproducts</Link>
      <Link to="/signup"className='btn btn-success m-3' >Signup</Link>
      <Link to="/signin" className='btn btn-danger m-3'>Signin</Link>
      <Link to="/addproducts" className='btn btn-success m-3'>Addproducts</Link>
      



    </nav>
    {/* Routes goes here */}
    <Routes>
      <Route path="/" element={<Getproduct />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addproducts" element={<Addproducts />} />
      <Route path="/Mpesapayment" element={<Mpesapayment />} />


    </Routes>
    </BrowserRouter>
  )
}
export default App 