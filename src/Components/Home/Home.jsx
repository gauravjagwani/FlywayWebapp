import React from 'react'

import video from '../../assets/clouds.mp4'
import airplane from '../../assets/plane.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1> Create Ever-Lasting Memories With Us</h1>

      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video}autoPlay muted loop className='video'></video>
        </div>
        <img src= {airplane} className='plane' />
      </div>

    </div>
  )
}

export default Home