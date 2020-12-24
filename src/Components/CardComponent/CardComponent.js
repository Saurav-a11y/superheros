import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSingleCharacterStartAsync } from "../../Redux/Character/characterAction";
import "./CardComponent.css";

const CardComponent = ({
  comicData,
  history,
  fetchSingleCharacterStartAsync,
}) => {
  const handleClick = () => {
    fetchSingleCharacterStartAsync(comicData.id);
    history.push(`/character/${comicData.id}`);
  };
  return (
    <div className="card">
      <div className="card-body text-center">
        <img
          className="card-img-top"
          src={comicData.thumbnail.path + ".jpg"}
          alt="Cardimage"
        />
        <div className="card-img-overlay">
          <button type="button" className="btn" onClick={handleClick}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { fetchSingleCharacterStartAsync })(
  withRouter(CardComponent)
);
