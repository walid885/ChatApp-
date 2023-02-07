import React from 'react'
import Cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'
import Messages from './Messages'
import Input from './Input'


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
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat