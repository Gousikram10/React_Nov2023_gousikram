import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
export default function FormPropsTextFields() {
  const [name,setName]=useState();
  const [pass,setPass]=useState();
  const [email,setemail]=useState();
  const [mobile,setmobile]=useState();
  const[error,Error]=useState(false);
  const handleSubmit = async (e) => {
    await axios.post("http://localhost:3001/login",{"Name":name,"Password":pass,"email":email,"mobile":mobile});
  }
 
  
  return (
    <body className='total1'>
    <div>

    <Box className='bb'
      sx={{
        '& .MuiTextField-root': { m: 2, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <h1 style={{textAlign:'center'}}>Sign Up</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Enter Name"
          name="Name"
          onChange={(e)=>{
            setName(e.target.value);
          }}
          />
          <br/>
        <TextField
          required
          id="Mobile Number"
          label="Mobile Number"
          type='Number'
          name="Mobile Number"
          onChange={(e)=>{
            setmobile(e.target.value);
          }}
          />
          <br/>
        <TextField
          required
          id="email"
          label="email"
          type='email'
            name="Email"
            onChange={(e)=>{
              setemail(e.target.value);
            }}
          />
          <br/>
        
        <TextField
          id="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="Password"
          onChange={(e)=>{
            setPass(e.target.value);
          }}
          />
          <br/>
        
        <TextField
          id="confirm"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          />
       <br/>
       <br/>
       <input className='check1' type='checkbox'></input>
       <label> I agree the terms and conditions   </label>
       <Link to="/lo">Back to page
       </Link>
       <br/>
       {/* <Link to='/'> */}

       <button type='submit' style={
         {
           margin:'25px',
          }
        }>
       
        <b>SUBMIT</b></button>
        {/* </Link> */}
        </form>
       </div>
    </Box>
           </div>
           </body>
  );
}
