
import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component
{
     constructor(){
   super();
   this.state={
     name:"simmu"
   }

     }
     componenetDidMout()
     {
          console.warn("didmout")
     }
     render ()
     {
          console.warn("render")
     return(
          <div className="App">
          <h1> component did mount   {this.state.name} </h1>
          <button onClick={()=>{this.setState({name:"sidhu"})}}>updater </button>
          </div>
          )
     };
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>