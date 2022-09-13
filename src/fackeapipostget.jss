 
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
function App()
{
     const [id1,setId1]=useState("");
     const [name1,setName1]=useState("");
     const [email1,setEmail1]=useState("");
     const [data,setData]=useState([]);
        let record;
     
     function abcd(){
          fetch ("https://jsonplaceholder.typicode.com/users").then((result)=>{
               result.json().then((resp)=>{
                    record = resp;
               setData(resp)
               })
          })
          // console.warn(data);
     }
        console.warn("======== ",data);
         function deletuser(id)
          {
               fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
               method:'DELETE'
               }).then((result)=>{
                    result.json().then((resp)=>{
                         // console.warn(resp)
                         })
               })
          }
          function Apipost()
          {
                  console.warn(id1,name1,email1);
                  let data ={id1,name1,email1};
                  fetch("https://jsonplaceholder.typicode.com/users",{
                   method:"POST",
                   headers:{
                    'Accept':'application/json',
                    'Content-type':'appplication/json'
                   },
                   body:JSON.stringify(data)
               }).then((result)=>{
                    result.json().then((resp)=>{
                     console.warn("resp",resp)
                    }
                    )
               }
               )
          }
          return(          
                   <div className='App'>
               <h1>API call</h1>
                    <h1>API call</h1>
                    <input type="text" value={id1} onChange={(e)=>{setId1(e.target.value)}} id1='id'/><br/>
                    <input type="text"  value={name1}  onChange={(e)=>{setName1(e.target.value)}} name1='name'/><br/>
                    <input type="text"  value={email1}  onChange={(e)=>{setEmail1(e.target.value)}}  email1='email'/><br/>
                    <button onClick={()=>Apipost()}>sumbit post</button><br/>
                    <button onClick={()=>abcd()}>click me </button>
                    <table  border="2">
                         <tbody>
                              <tr>
                                   <td>userid</td>
                                   <td>name</td>
                                   <td>gmail</td>
                              </tr>
                              { data.map((item,i)=>
                                   <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td><button onClick={()=>deletuser(item.id)}>delete</button></td>
                                   </tr>
                                   )
                              }     
                         </tbody>
                    </table>
                    </div>
               )
               
}

  export default App;
  
  


  // <button onClick={()=>abcd()}>click me </button>
          //      <div>

          //     <table  border="2">
          //           <tbody>
          //                <tr>
          //                     <td>userid</td>
          //                     <td>name</td>
          //                     <td>gmail</td>
          //                </tr>
          //                { data.map((item,i)=>
          //                     <tr key={i}>
          //                          <td>{item.id}</td>
          //                          <td>{item.name}</td>
          //                          <td>{item.email}</td>
          //                          <td><button onClick={()=>deletuser(item.id)}>delete</button></td>
          //                     </tr>
          //                )
          //                }     
          //           </tbody>
          //      </table>
          //      </div> 
