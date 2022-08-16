
import logo from './logo.svg';
import './App.css';
import React from 'react';
function App()
{
     const [status,setstatus]=React.useState(false)
     return(
     <div className="App">{
               status?<h1>my name is guri </h1>:null
     }
               <button onClick={()=>setstatus(!status)}>show</button>
          </div>
     );
}
 
export default App;















































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>