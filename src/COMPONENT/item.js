import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { blue } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
export function Details() {
    const [details, setDetail] = useState([]);
    const [vege, setvege] = useState([]);
    const [name, setName] = useState();
    const[error,setError]=useState(false);
    const [no,setno]=useState(0);
    const [quan,setquan]=useState(0);
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

    // const id = useRef("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios
    //         .delete(`http://localhost:3001/${type}/${id.current.value}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             console.log(`Deleted Id: ${id}`);
    //         })
    //         // .catch()
    //         // {
    //         //     alert("deleted");
    //         // }
    // }
    // const [count,setCount]=useState(0);
    // const add=()=>{
    //     setCount(count+1);
    // }


    const handle = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
         
          const response = await axios.get(`http://localhost:3001/${type}`);
          const user = response.data.find((user) => user.productname === name);
          if(user)
          {
            setError(true);
            setvege(user);
            // alert("success");
        }
    }
    function number()
    {
        setno(no+quan*vege.productamt);
    }


    return (
        <div style={{ backgroundImage: 'url(https://images.hdqwalls.com/download/abstract-simple-background-4k-lp-1920x1080.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', width: '1400px', marginTop: '20px' }}>
                <h1 style={{ textAlign: 'center',fontFamily:'revert-layer' }}>PAYMENT PORTAL</h1>
                <h2 style={{ textAlign: 'center',color:'whitesmoke' }}>PRODUCT DETAILS</h2>
                    <div style={{textAlign:'center'}}>
                <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label" >Enter type</InputLabel>
      <Select style={{backgroundColor:'white'}}
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
    </div>
    
                <h1 style={{ textAlign: 'center' }}>{type}</h1>
                <table style={{ border: 'orange solid 7px', padding: '30px', margin: '50px auto' }}>
                    <thead style={{ backgroundColor: 'gray' }}>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            {/* <th>{type}</th> */}
                            <th>Product amount</th>
                            <th>quantity</th>
                            {/* <th>total money</th> */}
                            {/* <th>Extra quantity</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.productname}</td>
                                <td>{emp.productamt}</td>
                                <td>{emp.quantity}</td>
                                {/* <td>{count*emp.productamt}</td> */}
                                {/* <td><button style={{ backgroundColor: 'green', padding: '1px',marginLeft:'12px' }} onClick={add}><AddIcon/></button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div >
            <img style={{height:'200px',width:'300px',border: 'orange solid 7px'}} src="https://cdn.dribbble.com/users/3874322/screenshots/15083246/media/c09b5278d22864c901679848eaaefdf4.gif"></img>
            </div>
        <div>

            <Box className='item'
   
   sx={{
     '& .MuiTextField-root': { m: 1, width: '30ch' },
   }}
   noValidate
   autoComplete="off"
 >
     
               <div  style={{  width: '1000px', margin: '30px' ,padding:'50px',textAlign:'center'}}>
                <div>
                    <h1>ENTER PRODUCT NAME:</h1>

                    
                    <input type="text" style={{width:'300px'}} onChange={(e)=>{
                        setName(e.target.value);
                    }}></input>
                    <br/>
                    <div className="bitem">
                        
                    <button onClick={handle} variant='contained' style={{backgroundColor:'orange'}}><b>SUBMIT</b></button>
                    </div>
                    </div>
                    <p><h2>PRODUCT AMOUNT : {vege.productamt}</h2></p>
                    <input type="number" style={{width:'300px',padding:'10px'}} placeholder="ENTER QUANTITY" onChange={(e)=>{
                        setquan(e.target.value);
                    }}></input>

                    <p><h2>AMOUNT :{quan*vege.productamt}</h2></p>
                    <div className="bitem">
                    <button onClick={number}><b>CONFIRM</b></button>
                    </div>
                    <h1>TOTAL AMOUNT : {no}</h1>
                    <div className="bitem">
                    <button style={{backgroundColor:'red'}}><b>PAY NOW</b></button>
                    <Fab variant="extended" color="primary" href="/" style={{marginLeft:'100px'}}>
        <NavigationIcon sx={{ mr: 1 }} />
       BACK TO HOME
      </Fab>
                    </div>
                </div>
  </Box>


                </div>
        </div>

    )
};
