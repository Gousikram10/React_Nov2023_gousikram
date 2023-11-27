import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { blue } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
export function Accountdetails() {
    const [details, setDetail] = useState([]);
    const [name, setName] = useState();
    
    useEffect(() => {
        axios
            .get('http://localhost:3001/login')
            .then((res) => {
                setDetail(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const id = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .delete(`http://localhost:3001/login/${id.current.value}`)
            .then((res) => {
                console.log(res.data);
                console.log(`Deleted Id: ${id}`);
            })
    }
    
    return (
        <div style={{ backgroundImage: 'url(https://www.imaginemonkey.com/wp-content/uploads/2021/12/Dapps-scaled.jpg)', backgroundSize:'cover',backgroundRepeat:'no-repeat',minHeight: '100vh',width:'100%',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', width: '1400px', marginTop: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>ACCOUNT DETAILS</h1>
                <table style={{ border: 'orange solid 7px', padding: '30px', margin: '60px auto' }}>
                    <thead style={{ backgroundColor: 'gray' }}>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Password}</td>
                                <td>{emp.email}</td>
                                <td>{emp.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ maxWidth: '90%', width: '800px', marginTop: '20px' }}>
                    <h1 sx={{textAlign:'center'}}>DELETE DETAILS</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input type='number' placeholder="ENTER ID " ref={id} style={{ width: '70%', height: '30px', marginRight: '10px' }} />
                    <div style={{marginRight:'280px'}}>
                    <button style={{ backgroundColor: 'red', padding: '10px' }}><DeleteIcon /></button>
                    </div>
                </form>
                <Fab variant="extended" color="success" href="/" style={{marginTop:'20px'}}>
        <NavigationIcon sx={{ mr: 1 }} />
       BACK TO HOME
      </Fab>
            </div>
        </div>
    )
};
