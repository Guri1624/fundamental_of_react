import React from "react"
class Render extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>render method  {this.props.name}</h1>
            </div>
        )
    }
}
export default Render