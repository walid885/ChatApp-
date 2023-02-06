import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
   <div className='formContainer'>
    <div className='formWrapper'>
        <span className='Logo'>My ChatAPP</span>
        <span className='Title'>Login</span>
        <form >
            <input type='email' placeholder='E-mail'/>
            <input type='password' placeholder='Password'/>
            
          <button>Sign In</button>
        </form>
        <p>You Don't Have an account ? Register </p>
    </div>
   </div>
  )
}

export default Login