import React, { useEffect } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { EventsCarousel } from "../../Components/EventsCarousel/EventsCarousel";
import ItemSlider from "../../Components/ItemSlider/ItemSlider";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";
import { fetchComicsStartAsync } from "../../Redux/Comics/comicsAction";
import { selectComicsData } from "../../Redux/Comics/comicsSelector";
import {
  isFetching,
  selectEventResult,
} from "../../Redux/Events/eventsSelector";
import { fetchCharacterStartAsync } from "../../Redux/Character/characterAction";
import {
  isFetchingCharacter,
  selectCharacterResult,
} from "../../Redux/Character/characterSelector";
import ComicsCollection from "../../Components/ComicsCollection/ComicsCollection";
import { Route } from "react-router-dom";
import SingleCharacter from "../../Components/SingleCharacter/SingleCharacter";

const EventCarouselWithSpinner = WithSpinner(EventsCarousel);
const CharacterItemWithSpinner = WithSpinner(ComicsCollection);
const SingleCharacterWithSpinner = WithSpinner(SingleCharacter);

const HomePage = ({
  isFetching,
  isFetchingCharacter,
  eventResults,
  comicsData,
  characterData,
  fetchComicsStartAsync,
  fetchCharacterStartAsync,
  match,
}) => {
  useEffect(() => {
    fetchComicsStartAsync();
    fetchCharacterStartAsync();
  }, [fetchComicsStartAsync, fetchCharacterStartAsync]);
  return (
    <div className="home-page container-fluid">
      <EventCarouselWithSpinner isLoading={isFetching} results={eventResults} />
      <div className="comic-slider">
        <span className="title">
          {" "}
          Read our latest Comics with latest features and with latest brand{" "}
        </span>
        <ItemSlider comicsData={comicsData} />
      </div>
      <div className="character-collections">
        <span className="title">Marvel's Characters </span>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CharacterItemWithSpinner
              match={match}
              isLoading={isFetchingCharacter}
              characterData={characterData}
              {...props}
            />
          )}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: isFetching,
  eventResults: selectEventResult,
  comicsData: selectComicsData,
  characterData: selectCharacterResult,
  isFetchingCharacter: isFetchingCharacter,
});

export default connect(mapStateToProps, {
  fetchComicsStartAsync,
  fetchCharacterStartAsync,
})(HomePage);
