
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App()
{
     const[name,setname]=useState("");
     const[tnc,setTnc]=useState(false);
     const[intrest,setintrest]=useState("")
     function getformData(e)
     {
          console.warn(name,tnc,intrest)
          e.preventDefault()
     }
     return(
     <div className="App">
          <h1>moves counter</h1>
          <form onSubmit={getformData}>
               <input type="text" placeholder="enter name"onChange={(e)=>setname(e.target.value)} /><br></br>
<select onChange={(e)=>setintrest(e.target.value)}>
     <option> select option</option>
     <option> marvel</option>
     <option> dc</option>
     <option> sony</option>
</select><br></br>
<input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>accept the condition</span><br></br>
<button type="submit">submit</button>
               
          </form>
           
          </div>
     );
}
 
export default App;















































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>