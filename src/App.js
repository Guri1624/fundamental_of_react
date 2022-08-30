
import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect }  from 'react'
function App()
{
const [count,setCount]=useState(0)
     useEffect(() =>{
          alert("useefect")
     }
     )
     return(
     <div className="App">
        <h1>hello{count} </h1>
        <button onClick={()=>setCount(count+1)}>update effectr</button>
        </div>
     );
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>