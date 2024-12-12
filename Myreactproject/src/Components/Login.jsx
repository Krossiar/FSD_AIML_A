import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom";
const Login=({regdata})=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    function validate(e){
        e.preventDeafault();
        if(regdata.email==email && regdata.password==password){
            alert("Login Successful")
            navigate('/dashboard')
        }
        else{
            alert("Login Failed")
        }
    }

    return(
        <div>
            <h1>Login Page</h1>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Login </button>
</form>
        </div>
    )
}
