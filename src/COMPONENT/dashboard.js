import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css';
import {Link} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { cyan } from '@mui/material/colors';

export default function FormPropsTextFields() {

  const [details, setDetail] = useState([]);
  const [vege, setvege] = useState([]);
  const [no,setno]=useState(0);
  const [name,setName]=useState();
  const [amt,setamt]=useState();
  const [quantity,setquan]=useState();
  const [type,setType]=useState("vegetables");
  useEffect(() => {
      axios
          .get(`http://localhost:3001/${type}`)
          .then((res) => {
              setDetail(res.data)
              // setType(document.getElementById("change").value)
          })
          .catch((err) => {
              console.log(err);
          });
  },[type]);



  const[error,Error]=useState(false);
  const handleSubmit = async (e) => {
    await axios.post(`http://localhost:3001/${type}`,{"productname":name,"productamt":amt,"quantity":quantity});
  }
 
  
  return (
    <body >
    <div>

    <Box className='bb'
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch'},
      }}
      style={{backgroundImage:'url(https://i.pinimg.com/originals/6f/6c/15/6f6c1538b050072b002dbc06bedaaf90.jpg)',backgroundSize:'cover'}}
      noValidate
      autoComplete="off"
      >
        <h1 style={{textAlign:'center'}}>ADD ITEMS</h1>

<FormControl sx={{ m: 2, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label" >Enter type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="change"
        label="Age"
        // onChange={handleChange}
        onChange={(e)=>{setType(e.target.value)}}
      >
        
        <MenuItem value={"vegetables"}>vegetables</MenuItem>
        <MenuItem value={"fruits"}>fruits</MenuItem>
        <MenuItem value={"station"}>station</MenuItem>
      </Select>
    </FormControl>
      <table style={{ border: 'orange solid 7px', padding: '30px', margin: '50px auto' }}>
                      <thead style={{ backgroundColor: 'purple' ,color:"white"}}>
                          <tr>
                              <th>id</th>
                              <th>Product Name</th>
                              <th>Product amount</th>
                              <th>quantity</th>
                          </tr>
                      </thead>
                      <tbody>
                          {details.map((emp) => (
                              <tr key={emp.id}>
                                  <td>{emp.id}</td>
                                  <td>{emp.productname}</td>
                                  <td>{emp.productamt}</td>
                                  <td>{emp.quantity}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
        {/* <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label" >Enter type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="change"
        label="Age"
        // onChange={handleChange}
        onChange={(e)=>{setType(e.target.value)}}
      >
        
        <MenuItem value={"vegetables"}>vegetables</MenuItem>
        <MenuItem value={"fruits"}>fruits</MenuItem>
        <MenuItem value={"station"}>station</MenuItem>
      </Select>
    </FormControl> */}
      <div>
        <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Enter ProductName"
          name="Name"
          type='text'
          onChange={(e)=>{
            setName(e.target.value);
          }}
          />
          <br/>
        <TextField
          required
          id="Mobile Number"
          label="Enter amount"
          type='Number'
          name="Mobile Number"
          onChange={(e)=>{
            setamt(e.target.value);
          }}
          />
          <br/>
        <TextField
          required
          id="email"
          label="Enter quantity"
          type='text'
            name="Email"
            onChange={(e)=>{
              setquan(e.target.value);
            }}
          />
          <br/>
        
        
       <br/>

       <button type='submit' style={
         {
           margin:'25px',
          }
        }>
       
        <b>SUBMIT</b></button>
          </form>
          <Link to='/'>
       <button type='submit'  style={
         {
           margin:'25px',
          }
        }>
        <b>HOME</b></button>
        </Link>
       </div>
    </Box>
           </div>
           </body>
  );
}
