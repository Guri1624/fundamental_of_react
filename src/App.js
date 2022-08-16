
import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from '@testing-library/react';
class App extends React.Component
{
     constructor()
     {
          super();
          this.state={
               data:"anil"}
       
     }
render()
{
     console.warn("render");
     return(
          <div>
          <h1> {this.state.data}</h1>
          </div>
          )
}
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>