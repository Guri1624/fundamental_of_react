
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Render from './Render'


function App()
{
     const [name,setName]=useState("anil")
     return(
          <div className="App">
          <h1> render method in react </h1>
          <Render name={name}/>
          <button onClick={()=>setName("rahul")}>update name </button>
          </div>
          )
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>