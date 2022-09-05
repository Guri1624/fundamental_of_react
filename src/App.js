
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
function App()
{
     const [data,setData]=useState({name:'sahil',age:'12'})
     return(
     <div className="App">
    <h1>state with object</h1><br/>
    <input type="text" placeholder='entername'  onChange={(e)=>{setData({...data,name:e.target.value})}}/>
    <input type="text" placeholder='enterage'    onChange={(e)=>{setData({...data,age:e.target.value})}}/>
    <h1>name ={data.name}</h1>
    <h1>age ={data.age}</h1>
        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>