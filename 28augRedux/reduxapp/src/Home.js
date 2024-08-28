import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
export default function Home(){
    const counterVal=useSelector((state)=>state.counter);
    //dispatch is coming from redux library
    const dispatch=useDispatch();
    const add=()=>{
        dispatch({type:"add"})

    }
    const sub=()=>{
        dispatch({type:"sub"})


    }
    return(
        <div>
            <h1>HOME PAGE</h1>
            

             <h1>{counterVal}</h1>
          
            <input type="button" onClick={()=>add()}value="Add"/><br></br><br></br>
            <input type="button" onClick={()=>sub()} value="Sub"/>
            
            
            <Header/>
        </div>
    )

}