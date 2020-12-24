import React from "react";

import CardComponent from "../CardComponent/CardComponent";

import "./ComicsCollection.css";

const ComicsCollection = ({ characterData, match }) => {
  console.log(match);
  return (
    <div className=" comics-collection">
      <div className="card-deck">
        {characterData.map((data) => (
          <CardComponent key={data.id} comicData={data} characterDataId />
        ))}
      </div>
    </div>
  );
};

export default ComicsCollection;
