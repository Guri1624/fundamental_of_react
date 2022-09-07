
import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
function App()
{
     const [data,setData]=useState([]);
     let record;
     useEffect(()=>{

     },[])

     function abcd(){
          fetch ("https://jsonplaceholder.typicode.com/users").then((result)=>{
               result.json().then((resp)=>{
                    record = resp;
               setData(resp)
               })
          })
          console.warn(data);

     }
     console.warn("======== ",data);
        function deletuser(id)
          {
               fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
               method:'DELETE'
               }).then((result)=>{
                    result.json().then((resp)=>{
                         console.warn(resp)
                         })
               })
          }
          
               return(
                    <div className='App'>
                    <h1>API call</h1>
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






































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>