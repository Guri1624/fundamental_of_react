
import React, { useEffect, useState } from 'react'
function App(props)
{
    useEffect (()=>{
        alert("count is "+props.count)
    },[props.count,props.data]
    )
    
     return(
     <div className="App">
        <h1>data props={props.data}</h1>
        <h1>count props ={props.count}</h1>
        </div>
     );
}
export default App;