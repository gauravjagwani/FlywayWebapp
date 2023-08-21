import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src="" alt="" />
          </div>
          <p>Your Mind should be stronger than your Feelings, fly!</p>
          <div className="socialIcon flex">
            <FaFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <AiFillYoutube className='icon'/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitles">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          
        </div>

        <div className="footerLinks">
          <span className="linkTitles">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features </a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Manage your Booking</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          
        </div>

        
      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="">Gaurav Jagwani</a></p>
      </div>
    </div>
  )
}

export default Footer