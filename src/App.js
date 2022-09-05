
import logo from './logo.svg';
import './App.css';
import React, { useState ,table} from 'react'
function App()
{
     const[ data,setData]=useState([])
     useState(()=>{
          fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
           result.json().then((resp)=>{
     setData(resp)
     } )
})
     },[] )
     console.warn(data)
     return(
     <div className="App">
       <h1 > api call</h1>
       <table border="2">
          <tr>
               <td>UserId</td>
               <td>id</td>
               <td>title</td>
          </tr>
          {
               data.map((prop)=>
               <tr>
               <td>{prop.userId}</td>
               <td>{prop.id}</td>
               <td>{prop.title}</td>
          </tr>
               )
          }
       </table>
        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>