import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Feature from "./Feature";
import Content from "./Content";
import "./Home.css";

const Home = (props) => {
  const { movies, shows } = props;
  const [title, setTitle] = useState("");
  return (
    <div className="container">
      <Hero />
      <div>
        <textarea
          placeholder="Search book by title"
          className="searchBar"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></textarea>
        <Link className="featureTitleLink" to={"/search/" + title}>
          <div className="justify-content-center searchBtnContainer">
            <input type="submit" value="Search" className="searchBtn" />
          </div>
        </Link>
      </div>

      <Feature videos={movies} section="Featured Movie" />
      <Feature videos={shows} section="Featured Show" />
      <Content />
    </div>
  );
};

export default Home;
