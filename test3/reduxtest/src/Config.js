import Config from './redux/Config'; 
import {configureStore} from '@reduxjs/toolkit';

//object ie string is going to be stored so put {}, if it is array use[]
const storeMyDetailsReducer=(state={},action)=>{
    switch(action.type){
        case "saveDetails":
            console.log(action.data);
            return action.data;
            break;
    }
    return state;
}
export const mystore=configureStore({
    reducer:{
        //we should add reducer in mystore
        "counter":counterLogic,
        "myDetails":storeMyDetailsReducer
       
    }
})