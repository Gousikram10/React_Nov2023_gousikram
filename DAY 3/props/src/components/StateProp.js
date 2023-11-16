import {useState} from 'react';
const StateProp=()=>
{
    const[name,setName]=useState("AKKinG");
    const[num,setNum]=useState(0);
    const[student,setStudent]=useState({name: "Arun",age:19});
    const nameHandler=()=>{ 
         setName("Arun");
};
const numHandler=()=>{
    let value=num;
    setNum(++value);
};
    return(
        <div>
            <h1>Stateprops</h1>
            <h2>Hii {name}</h2>
            <h2>Student name is {student.name} and age is {student.age}</h2>
            <h2>Number is {num}</h2>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Increment Number</button>
        </div>
    );
}
export default StateProp;