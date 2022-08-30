
import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Uefeect from './Uefeect'
function App(){
     const [data,setData]=useState(10);
     const [count,setCount]=useState(10);
     
     return(
     <div className="App">
          <Uefeect count={count} data={data}/>
        <button onClick={()=>setData(data+1)}>update data </button>
         <button onClick={()=>setCount(count+1)}>update count </button>
        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>