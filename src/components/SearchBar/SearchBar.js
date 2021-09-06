// You do not need to change any code in this file for MVP
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { set_stateSearch } = props;

  const [stateSearchInput, set_stateSearchInput] = useState("");

  const cb_onChange = (event) => {
    // console.log(event.target.value);
    set_stateSearchInput(event.target.value);
  };

  const cb_onSubmit = (event) => {
    //prevent default behavior
    event.preventDefault();
    // console.log("stateSearchInput = ", stateSearchInput);
    set_stateSearch(stateSearchInput);
    //reset stateSearchInput to initial value
    set_stateSearchInput("");
  };

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form" onSubmit={cb_onSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={cb_onChange}
          value={stateSearchInput}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
