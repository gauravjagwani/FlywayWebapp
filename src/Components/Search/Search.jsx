import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy Class</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go?" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travellers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <BsCalendar3 className="icon" />
            </div>
            <div className="texts">
              <h4>Check-in</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <BsCalendar3 className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <button className=" btnBlock btn">
            Search Flight
          </button>

        </div>
      </div>
    </div>
  );
};

export default Search;
