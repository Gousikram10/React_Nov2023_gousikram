import * as React from 'react';
import react,{useState,useEffect} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './design.css'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function Loginpage() {
  const navigate=useNavigate();
  const [name,setName]=useState();
  const [password,setpass]=useState();
  // const [p,setp]=useState();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  // const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get('http://localhost:3001/login');
      const user = response.data.find((user) => user.Name === name);
     
      if (user) {
        if (user.Password === password) {
          alert("login success")
          navigate('/'); // Redirect to dashboard on successful login
          setError(false)
        } else {
          setSuccess(false);
          setError(true);
        }
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle other errors if needed
    }
    console.log("hi");
  };

  
  return (
    <body className='total'>
      <div >
    <Box className='aa'
   
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='icon'>
      <AccountCircleIcon sx={{fontSize:"80px",color:'blue'}} />
      <h2>Sign In</h2>
        </div>
      <div id="a">
        <form onSubmit={handleSubmit}>
        <TextField
        required
        id="outlined-required"
        label="Username"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
        <br/>
        <TextField
        required
        id="outlined-password-input"
        value={password}
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e)=>{setpass(e.target.value)}}
        />
          <br/>
          

          


    <Stack sx={{ width: '100%' }} spacing={2}>
      {error&&<Alert severity="error">Wrong username and password!</Alert>}
      {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </Stack>



          {/* <Link to='/'> */}
          <button type='submit' ><b>SIGN IN</b></button>
          {/* </Link> */}
          <br/>
          <br/>
       <Root>
       <Divider>
        <Chip label="OR" className='PP' />
      </Divider>
       </Root>
       <h4 style={{textAlign:'center'}}>New user?
        <Link to="/re" style={{paddingLeft:'10px'}}>Click</Link>
       </h4>
       <p></p>
         <button><b>GOOGLE</b></button>
         </form>
      </div>
     </Box>
    </div>
       </body>
  );
}
