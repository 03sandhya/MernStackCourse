import {configureStore} from '@reduxjs/toolkit';
//configure store helps to create store
//2 parametres: 1)state means initial state is 0, when pg is loaded initial value is 0
//action says whether it is inc/dec
const counterLogic=(state=0,action)=>{
    switch(action.type){
        case "add":
            return state+1;
        break;
        case "sub":
            return state-1;
        break;
    }
    //if switch is not match,return below
    return state;


}
export const mystore=configureStore({
    reducer:{
        "counter":counterLogic,
       
    }
})