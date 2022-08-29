
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App()
{
     const [data,setData]=useState("anil")
     return(
     <div className="App">
        <h1>{data} </h1>
        <button onClick={()=>setData("mashal")}>update data</button>
          </div>
     );
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>