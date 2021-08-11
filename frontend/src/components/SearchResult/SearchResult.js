import Title from "../General/Title";
import VideoItem from "../Video/VideoItem";
import SearchBar from "./SearchBar";

import "./SearchResult.css";

const SearchResult = (props) => {
  const { pageTitle, content, setPopupTitle, setPopupContent, togglePopup } =
    props;

  return (
    <div className="container searchResultContainer">
      <SearchBar
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        togglePopup={togglePopup}
      />
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
