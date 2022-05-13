import React from 'react'
import "./header.css"

function Header() {
    return (
        
      <div className="headerTitles">
      <video src={process.env.PUBLIC_URL + '/videos/video10.mkv'} autoPlay loop muted />
      <h1>Let's Blog!</h1>
      <p>It takes a village to save the planet!</p>
      </div>
    )
}

export default Header
