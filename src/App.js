
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
function App()
{
     const[count,setCount]=useState(1)
    function Update()
     {
        for (let i=1;i<5;i++)
        {
          setCount((pree)=>{
               return pree+1
          })
        }
     }
     return(
     <div className="App">
       <h1 >{count}</h1>
      <button onClick={Update}>click me and update</button>
        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>