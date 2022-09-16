import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Header'
function Search()
{
   async function find(key)
    {
      let result=fetch("http://localhost:5000/users/"+key)
      console.warn("key",key)
      result=await result.json()
    }
    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3' >
                <h1>search componenet </h1>
                <br/>
                <input type="text" onChange={(e)=>find(e.target.value)} className='form-control' placeholder='search product'/>
            </div>
        </div>
    )
}
export default Search;