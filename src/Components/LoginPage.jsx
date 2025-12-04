import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Math from '


function LoginPage() {
    const navigate = useNavigate()
    const handleClick = () => {
  navigate("/landing");
}
cinst [num,setnum]=React.useState(Math.randint(1000,9999));
  return (
    <div>
      <form>
        <label>NAME:</label>
        <input type="text" placeholder='enter username'/>
        <label>PASSWORD:</label>
        <input type="password" placeholder='enter password'/>
        <p>Enter capcha</p>
        <p>{num}</p>
        <input type="text" placeholder='enter capcha'></input>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
