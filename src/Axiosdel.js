import axios from 'axios';
import React,{useState,useRef} from "react";
function AxiosDelete()
{
    const id=useRef("");
    const handleSubmit =(event)=>{
        event.preventDefault();
        axios
        .delete(`http://localhost:3001/users/${id.current.value}`)
        .then((res) => {
            console.log(res.data);
            console.log(`Deleted Id: ${id}`);
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' ref={id} ></input>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AxiosDelete;