import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react"
function Login()
{
    const[user,setuser]=useState("");
    const [pasword,setpaword]=useState("");
    const[userErr,setuserErr]=useState(false);
    function loginhandle(e)
    {
        e.preventDefault()
    }
    function userhandler(e)
    {
let item=e.target.value;
console.log(item.length);
if(item.length<3)
{
    setuserErr(true)
}
else
{
   setuserErr(false) 
}
    }

    return(
        <div>

            <h1>Login validation</h1>
            <form onSubmit={loginhandle}>
              :::  {userErr}
            <input type="text" placeholder="enter user id" onChange={userhandler}/>{userErr?<span>user not valid</span>:""}
            <br>
            </br>
            <input type="text" placeholder="enter user pasword" onChange={userhandler}/>{userErr?<span>pasword is valide</span>:""}<br></br>
            <button typr="submit">submit</button>
            </form>
            </div>

    )

}
export default Login