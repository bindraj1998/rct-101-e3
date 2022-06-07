import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();
const initstate={
   isAuth:false,
   token:null

}

function reducer(state,action){
    switch(action.type){
        case "LOGIN_SUCCESS":{
return {
    ...state,isAuth:true,
    token:action.token
}
        }
    
    case "LOGOUT_SUCCESS":{

        return {
            ...state,isAuth:false,
            token:null

        }
    }
    case "LOGOUT_FAILURE":{
        return {
            ...state,isAuth:false,
            token:null
        }
    }
    default:{
        return state
    }
    }
}




export const AuthProvider = ({ children }) => {
  const[state,dispach]=useReducer(reducer,initstate)


  return <AuthContext.Provider value={[state,dispach]}>{children}</AuthContext.Provider>;
};
