import React, { useState } from "react";
import "./ItemSlider.css";
import ItemsCarousel from "react-items-carousel";
import CardComponent from "../CardComponent/CardComponent";

const ItemSlider = ({ comicsData }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="item-slider">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<button className="chevron">{"<"}</button>}
        rightChevron={<button className="chevron">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        {comicsData.map((comicData) => (
          <CardComponent key={comicData.id} comicData={comicData} />
        ))}
      </ItemsCarousel>
    </div>
  );
};
export default React.memo(ItemSlider);
