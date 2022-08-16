import React from 'react'
function Members(props)
{
    return(
        <div>  
            <h1>function pass in props</h1>
            <button onClick={props.data}>call function</button>
        </div>
    )
}
export default Members