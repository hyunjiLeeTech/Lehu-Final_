import { useState } from "react";

const SearchBar = (props) => {
  const { setPopupTitle, setPopupContent, togglePopup, isPopupOpen } = props;
  const [title, setTitle] = useState("");

  const onClickSearch = () => {
    if (title === "") {
      setPopupTitle("Search");
      setPopupContent("Please enter the title you want to search");
      togglePopup();
    } else {
      if (!isPopupOpen) {
        window.location.pathname = `/search/${title}`;
      }
    }
  };
  return (
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
  );
};

export default SearchBar;
