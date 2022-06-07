import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import axios from "axios"
// import { Navigate } from "react-router-dom";
// import Products from "../components/Products/Products";


const Login = () => {

  // const[state,dispach]=useContext(AuthContext)
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")


  const handleclick=(e)=>{
    e.preventDefault()
    axios({
      url:"https://reqres.in/api/login",
      method:"POST",
      data:{email,password}
    }).then((res)=>{
      alert("success")
      console.log(res)
      // dispach({
      //   type:"LOGIN_SUCCESS",
      //   token:res.data.token
      // })

    }).catch((err)=>{
      console.log(err)
    })
  }



// if(state.isAuth){
//   return (<Navigate to="/products"/>)
// }
// console.log("abcd")
  return (
    <div> Login
      <form onSubmit={handleclick}>
        <div>
      <input data-cy="login-email"  type="email" onChange={(e)=>setemail(e.target.value)} placeholder="email"/>
      </div>
      <div>
      <input data-cy="login-password"  type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="password"/>
      </div>
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
