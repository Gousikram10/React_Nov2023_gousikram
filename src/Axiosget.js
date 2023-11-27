import React,{useState,useEffect} from 'react';
import axios from 'axios';
const AxiosGet=(props)=>{
    const[employee,setEmp]=useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3001/users')
        .then((res)=>{
            setEmp(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <h1>Axios </h1>
            <ul>
                {employee.map((emp)=>(
                    <li key={employee.id}>{emp.name}</li>
                ))}
            </ul>
        </div>
    )
};
export default AxiosGet;