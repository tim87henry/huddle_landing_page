import React from 'react'
import image from '../assets/images/illustration-mockups.svg'

const Content = () => {
  return (
    <div className='content'>
        <div className="content-left">
            <img src={image}></img>
        </div>
        <div className="content-right">
            <div className="content-title"><h1>Build The Community Your Fans Will Love</h1></div>
            <div className="content-text">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</div>
            <button className='register'>Register</button>
        </div>
    </div>
  )
}

export default Content