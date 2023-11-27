import axios from 'axios';
import React,{useState} from 'react';
function AxiosPut()
{
    const[name,setName]=useState();
    const[id,setId]=useState();
    const handleChange =(event)=>
    {
        setName(event.target.value);
    }
    const handleId =(event)=>
    {
        setId(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .put(`http://localhost:3001/users/${id}`,{name})
        .then((res)=>{
            console.log(res.data);
        })
        .catch((error)=>{
            console.log("Error"+error);
        })
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' value={id} onChange={handleId}></input>
            <input type='text' value={name} onChange={handleChange}></input>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AxiosPut;