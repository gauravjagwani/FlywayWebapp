import React from "react";
// Travel Location images
import dubai from "../../assets/dubai.jpg";
import newyork from "../../assets/newyork.jpg";
import maldives from "../../assets/maldives.jpg";
import bali from "../../assets/Bali.jpg";



// Travelers Images
import traveler1 from "../../assets/user_2.jpg";
import traveler2 from "../../assets/user_3.jpg";
import traveler3 from "../../assets/user_4.jpg";
import traveler4 from "../../assets/user_1.jpg";

// High order Array method

const travelers = [
  {
    id: 1,
    destinationImage: dubai,
    travelerImage: traveler1,
    travelerName: "John Doe",
    travelLoc: "Dubai",
  },

  {
    id: 2,
    destinationImage: newyork,
    travelerImage: traveler2,
    travelerName: "Peter Parker",
    travelLoc: "New York",
  },

  {
    id: 3,
    destinationImage: maldives,
    travelerImage: traveler3,
    travelerName: "Stefen Salvatour",
    travelLoc: "Maldives",
  },

  {
    id: 4,
    destinationImage: bali,
    travelerImage: traveler4,
    travelerName: "Alicia Warner",
    travelLoc: "Bali",
  }

];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {/* Single Passenger card */}
          {travelers.map(({id, destinationImage, travelerImage, travelerName, travelLoc}) => {
            return (
              <div key ={id} className="singleTraveler">
                <img src={destinationImage} className="destinationImage" alt="" />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{travelLoc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;

{
  /* <div className="singleTraveler">
            <img src={dubai} className='destinationImage' alt="" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className='travelerImage' />
              </div>
              <div className="travelerName">
                <span>John Doe</span>
                <p>Dubai</p>
              </div>
            </div>
          </div> */
}
