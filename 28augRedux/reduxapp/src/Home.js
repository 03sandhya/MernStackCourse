import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "./Header"
export default function Home(){
    const counterVal=useSelector((state)=>state.counter);
    //dispatch is coming from redux library
    const dispatch=useDispatch();
    //const [state,setState]=useState(false); wont come, give true
    const [state,setState]=useState(true);
    const add=()=>{
        dispatch({type:"add"})

    }
    const sub=()=>{
        dispatch({type:"sub"})


    }
    const storeMyDetails=()=>{
        dispatch({type:"saveDetails", data:{"name":"sandhya","email":"sandhya488495@gmail.com"}});
    }
    return(
        <div>
            <h1>HOME PAGE</h1>
            <Header currentPage="Home"></Header>

             <h1>{counterVal}</h1>
           {(status)? <p className="red">This is a paragraph</p>:null}
          
            <input type="button" onClick={()=>add()}value="Add"/><br></br><br></br>
            <input type="button" onClick={()=>sub()} value="Sub"/><br></br><br></br>
            <input type="button" onClick={()=>storeMyDetails()}value="storemydetails"/>
            

            <Header/>
        </div>
    )

}