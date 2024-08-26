import React from 'react';
import {useState} from 'react';


function App() {
  const [username,setName]=useState('');
    const getinput=async () => {
        let res=await fetch(`https://api.agify.io/?name=${username}`);
        let data=await res.json();
        console.log(data);
        
    }
  return (
    <div>
      <input type="text" value={username} placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
      <button onClick={getinput}>click me</button>
      
    </div>
  );
}

export default App;
