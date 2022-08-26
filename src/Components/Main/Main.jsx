import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import "./main.scss"
import img from './assets/img3.png'
function Main() {
  return (
   <div className="main">
    <div className="main_container">
    <div className="main__content">
    <div className="text">
        <p>
            Hey there
        </p>
        <h1>I am Ali Hanan</h1>
        <p>I am a Mern Stack Developer</p>
        <div className="icons">
            <Twitter className='icon'/>
            <Facebook  className='icon'/>
            <Instagram className='icon'/>
        </div>
    </div>
    </div>
    <div className="main___image">
        <img src={img} alt="#"  />
    </div>
   

    </div>

   </div>
  )
}

export default Main