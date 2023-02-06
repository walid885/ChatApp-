import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
   <div className='formContainer'>
    <div className='formWrapper'>
        <span className='Logo'>My ChatAPP</span>
        <span className='Title'>Regitser</span>
        <form >
            <input type='text' placeholder='Display name'/>
            <input type='email' placeholder='E-mail'/>
            <input type='password' placeholder='Password'/>
            <input style={{display:"none"}} type='file' id="file"/>
            <label htmlFor="file">
              <img src={Add} alt=""/>
              <span> Add an avatar</span>
            </label>
          <button>Sign Up</button>
        </form>
        <p>You Already Have an account ? LogIn </p>
    </div>
   </div>
  )
}

export default Register