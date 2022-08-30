
import logo from './logo.svg';
import './App.css';
import React from 'react'
import {item,Table} from 'react-bootstrap'
function App()
{
     const user=[
           {   name:"sahil",email:'sahil@gmail',
               adress:[
                    {hn:"11",city:'patiala',countery:'india'},
                    {hn:"61",city:'ablala',countery:'india'},
                    {hn:"51",city:'ptera',countery:'india'},
               ]
          },
          {
               name:"sahil",email:'sahil@gmail',
               adress: [
                    {hn:"11",city:'patiala',countery:'india'},
                    {hn:"61",city:'ablala',countery:'india'},
                    {hn:"51",city:'ptera',countery:'india'},
               ]
          },
         { 
               name:"sahil",email:'sahil@gmail',
               adress: [
                    {hn:"11",city:'patiala',countery:'india'},
                    {hn:"61",city:'ablala',countery:'india'},
                    {hn:"51",city:'ptera',countery:'india'},
               ]
          }
     ];

     return(
     <div className="App">
       <h1 > nested loop with boot</h1>
       <Table variant="dark" striped>
          <tbody>
               <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>adress</td>
               </tr>
          
      
          {
               user.map((item)=>
               <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                          {
                              item.adress.map((data)=>
                               <tr>
                                    <td>{data.hn}</td>
                                    <td>{data.city}</td>
                                    <td>{data.countery}</td>
                               </tr>
                               )
                          }
                    </td>
               </tr>
               )
          }
          </tbody>
          
    
</Table>

        </div>
     );
}
export default App;












































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>