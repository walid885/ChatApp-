import React from 'react'

function Message() {
  return (
    <div className='message owner'>
    <div className="messageInfo">
    <img src='https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="some random dude I found on the internet " />
    <span>Just Now </span>
 
    </div>
    <div className="messageContent">
    <p>Hello</p>
   <img src="https://images.pexels.com/photos/4709294/pexels-photo-4709294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt =" an other random dude I found on the Interrnet!"/> 
    </div>
    </div>
  )
}

export default Message