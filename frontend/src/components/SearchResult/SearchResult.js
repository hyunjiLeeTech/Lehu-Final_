import { useState } from "react";

import Title from "../General/Title";
import VideoItem from "../Video/VideoItem";

import "./SearchResult.css";

const SearchResult = (props) => {
  const { pageTitle, content } = props;
  const [title, setTitle] = useState("");

  const onClickSearch = () => {
    window.location.pathname = `search/${title}`;
  };

  return (
    <div className="container searchResultContainer">
      <div>
        <input
          type="text"
          placeholder="Search book by title"
          className="searchBar form-control"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <div className="justify-content-center searchBtnContainer">
          <input
            type="submit"
            value="Search"
            className="searchBtn"
            onClick={onClickSearch}
          />
        </div>
      </div>
      <Title title={pageTitle} />
      <div className="row justify-content-first bookItemcontainer">
        {content.length === 0 ? (
          <p>Result not found</p>
        ) : (
          content.map((video, index) => (
            <VideoItem
              key={index}
              image={video.smallPoster}
              title={video.title}
              id={video.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResult;
