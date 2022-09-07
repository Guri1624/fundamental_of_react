import React, { useEffect, useRef } from "react";
function Previous(props)
{
    const lastval=useRef()
    useEffect(()=>{
        lastval.current=props.count
        })
        const prevval=lastval.current
    return(
        <div>
            <h1>props prtevious valuer={props.count}</h1>
            <h2>prevval={prevval}</h2>
        </div>
    )
}
export default Previous;