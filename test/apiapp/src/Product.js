import React from 'react';
export default function Product(){
    const getvalue = async () => {
        let res= await fetch("https://api.restful-api.dev/objects", {method: "GET",});
        let data = await res.json();
        console.log(data);  
        
}

    return(
        <div>
            <button onClick={getvalue}> get value</button>
        </div>
    )
}