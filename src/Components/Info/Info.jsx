import React from 'react'
import {BsCalendar3} from 'react-icons/bs'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'

// import img1 from '../../assets/window.jpg'
// import img2 from '../../assets/window_2.jpg'
// import img3 from '../../assets/window_3.jpg'


const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all round the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">  {/*Container*/}
            
            <div className="iconDiv flex">
              <BsCalendar3 className='icon'/>
            </div>
            <span className="cardTitle">Book and Relax!</span>
            <p>You can also call airline from your phone a book a flight ticket</p>
            
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Web Check-in</span>
            <p>You can also call airline from your phone a book a flight ticket</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTitle">Save your Info</span>
            <p>You can also call airline from your phone a book a flight ticket</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Info