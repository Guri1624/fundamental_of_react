
import logo from './logo.svg';
import './App.css'
import React from 'react'
function App(){ 
     const student=[
          {name:"anil",email:'ani;l@gmail',contect:7788},
          {name:"sam",email:'saml@gmail',contect:7558},
          {name:"rahul",email:'rahull@gmail',contect:7788},
     ]
     return(
     <div className="App">
       <h1 > arrry handle with list</h1>
       <table border={1}>
 {
      student.map((data)=>
       <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contect}</td>
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