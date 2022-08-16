import React from "react";
class Student extends React.Component{
    render()
    {
        return(
           
            <div>
                <h1>* {this.props.name}</h1>
                <h2>email ={this.props.email}</h2>
                <h3>adress ={this.props.adress}</h3>
            </div>
       
        )
          
        }
    }
    export default Student