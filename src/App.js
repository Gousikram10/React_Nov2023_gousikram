import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Loginpage from './COMPONENT/login';
import FormPropsTextFields from './COMPONENT/register'
import AxiosGet from './Axiosget';
import AxiosPost from './Axiospost';
import AxiosDelete from './Axiosdel';
import Admin from './COMPONENT/dashboard';
import AxiosPut from './Axiosput';
import Home from './COMPONENT/menu';
import { Accountdetails } from './COMPONENT/account';
import { Details } from './COMPONENT/item';
import AboutUs from './aboutus';
 const App = () => {
  return (
    <div>
      {/* <Loginpage/> */}
      {/* <Home/> */}
      {/* <AxiosGet/>
      <AxiosPost/>
      <AxiosDelete/>
      <AxiosPut/> */}
{/* <Details/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/lo" element={<Loginpage/>}/>
          <Route path="/item" element={<Details/>}/>
          <Route exact path="/re"element={<FormPropsTextFields/>}/>
          <Route exact path="/ad"element={<Admin/>}/>
          <Route exact path="/account"element={<Accountdetails/>}/>
          <Route exact path="/about"element={<AboutUs/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}
export default App;
