
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Commoncontext } from './Newcomp/Commoncontext';
import  Main  from './Newcomp/Main';
import Updatebutton from './Newcomp/Updatebutton';
class App extends React.Component
{
     constructor (){
          super();
          this.updateColor=(color)=>{
               this.setState({
                    color:color
               })
          }
          this.state={
               color:"green",
               updateColor:this.updateColor
          }
        
     }
     render (){
     return(
          <Commoncontext.Provider value={this.state}>
          <h1>CONTEXT API  </h1>
           <Main/>
           <Updatebutton/>
           </Commoncontext.Provider>
     );
     }
}
export default App;













































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>