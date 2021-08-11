import Hero from "./Hero";
import Feature from "./Feature";
import Content from "./Content";
import SearchBar from "../SearchResult/SearchBar";
import "./Home.css";

const Home = (props) => {
  const { movies, shows, setPopupTitle, setPopupContent, togglePopup } = props;

  return (
    <div className="container">
      <Hero />
      <SearchBar
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        togglePopup={togglePopup}
      />

      <Feature videos={movies} section="Featured Movie" />
      <Feature videos={shows} section="Featured Show" />
      <Content />
    </div>
  );
};

export default Home;
