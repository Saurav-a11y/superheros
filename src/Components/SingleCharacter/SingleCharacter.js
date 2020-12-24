import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import { selectSingleCharacterWithId } from "../../Redux/Character/characterSelector";
import "./SingleCharacter.css";
const SingleCharacter = ({ singleCharacterItem, match, history }) => {
  console.log(singleCharacterItem);
  console.log(match);
  console.log("from single character");
  const item = singleCharacterItem;

  return (
    <div className="single-character-page">
      <div className="overlay"></div>
      {singleCharacterItem ? (
        <div key={item.id} className="single-character">
          <img
            className="img-fluid img-thumbnail single-img"
            alt="single-character"
            src={item.thumbnail.path + ".jpg"}
          />
          <div className="single-character-details">
            <span className="title"> {item.name} </span>
            <p className="description">
              {" "}
              {item.description
                ? item.description
                : "Information not available"}
            </p>
            <div className="sub-details">
              <div className="single-sub-details">
                <span className="title"> Comics Available </span>
                <span className="availabe"> ({item.comics.available}) </span>
              </div>
              <div className="single-sub-details">
                <span className="title"> Series Available </span>
                <span className="availabe"> ({item.series.available}) </span>
              </div>
              <div className="single-sub-details">
                <span className="title"> Events </span>
                <span className="availabe"> ({item.events.available}) </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state, { match }) => ({
  singleCharacterItem: selectSingleCharacterWithId(match.params.characterId)(
    state
  ),
});
export default connect(mapStateToProps, null)(withRouter(SingleCharacter));
