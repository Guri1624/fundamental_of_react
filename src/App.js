
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Previous from './Previous'
function App()
{
     const [count,setCount]=useState(0)
     return(
     <div className="App">
      <Previous count={count}/>
      <button onClick={()=>setCount(Math.floor(Math.random()*10))}>update value</button>
        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>