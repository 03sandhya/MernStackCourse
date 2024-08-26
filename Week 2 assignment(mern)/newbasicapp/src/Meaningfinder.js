import React from 'react';
import {useState} from 'react';
export function userclick(){
    const [name,setName]=useState('');
    const getinput=async () => {
        let res=await fetch('https://api.agify.io/?name=textboxvalue');
        let data=await res.json();
        console.log(data);
        
    }
    return(
        <div>
            <input type="text" value={name} placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}/>
            <button onClick={getinput}>click me</button>
        </div>
    )

}
