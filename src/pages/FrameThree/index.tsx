import React, { useState } from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameThreeColumnunsplasheq9sa7t from "components/FrameThreeColumnunsplasheq9sa7t";
import initialDetails from "../../data/initialDetails.js";

const FrameThreePage: React.FC = () => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filteredCards = initialDetails.filter(
    data => {
      return (
        data
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
      // setIsLoading(true);
    }
  };

  function searchList() {
    const filtered = filteredCards.map(card => <FrameThreeColumnunsplasheq9sa7t className="flex flex-col h-[272px] md:h-auto items-start justify-start shadow-bs w-[244px] card-div" key={card.name} card={card} />);
    if (searchShow) {
      return (
        <div className="hover:cursor-pointer flex flex-col items-start justify-start p-2.5 hover:shadow-bs w-auto">
          {filtered}
        </div>
      );
    }
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[159px] items-start justify-start mx-auto p-[89px] md:px-10 sm:px-5 w-full">
        <Text
          className="md:ml-[0] ml-[167px] md:text-5xl text-[80px] text-black-900"
          size="txtRobotoBold80"
        >
          Tigerhall frontend assesment
        </Text>
        <div className="bg-black-900_01 flex flex-col font-ppneuemontreal gap-3.5 items-center justify-start mb-[3066px] md:ml-[0] ml-[167px] p-[26px] md:px-5 md:w-full">
          <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[244px]">
            <div className="bg-blue_gray-900 border border-gray-600 border-solid flex flex-col h-full items-center justify-start rounded w-full search-bar-div">
              <input
                className="pa3 bb br3 grow b--none bg-dark-gray ma3 search-bar-input"
                type="search"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <List
            className="flex flex-col gap-3.5 items-center mb-[22px] w-[88%] search-list"
            orientation="vertical"
          >
            {/* {isLoading ? <p>Loading...</p> : null} */}
            {searchList()}
            {/* <div className="hover:cursor-pointer flex flex-col items-start justify-start p-2.5 hover:shadow-bs w-auto">
              <FrameThreeColumnunsplasheq9sa7t className="flex flex-col h-[272px] md:h-auto items-start justify-start shadow-bs w-[244px]" />
            </div>
            <FrameThreeColumnunsplasheq9sa7t className="hover:cursor-pointer flex flex-col h-[272px] md:h-auto items-start justify-start hover:shadow-bs shadow-bs w-[244px]" /> */}
          </List>
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
