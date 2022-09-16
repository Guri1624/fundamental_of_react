import Header from './Header'
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
function Protected(props) {
  let Cmp=props.Cmp
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/Register')
    }
  }, [])
  return (
    <div>
      <Header/>

    </div>
  )
}
export default Protected;