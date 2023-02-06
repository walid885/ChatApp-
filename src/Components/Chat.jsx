import React from 'react'
import Cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane </span>
        <div className="chatIcons">
        <img src={Cam} alt='camera logo'></img>
        <img src={add} alt='Add logo'></img>  
        <img src={more} alt='more logo'></img>
        </div>
      </div>

    </div>
  )
}

export default Chat