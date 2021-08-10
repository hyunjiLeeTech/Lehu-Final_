import { useEffect, useState } from "react";

import Home from "../components/Home/Home";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import Loading from "../components/General/Loading";

const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [featuredShows, setFeaturedShows] = useState([]);
  const [isLoadingMovie, setIsLoadingMovie] = useState(true);
  const [isLoadingShow, setIsLoadingShow] = useState(true);

  useEffect(() => {
    fetch(
      "https://lehu-final-backend.herokuapp.com/videos/shows/isFeatured?isFeatured=true"
    )
      .then((res) => res.json())
      .then((videos) => {
        setFeaturedShows(videos.body);
        setIsLoadingShow(false);
      });

    fetch(
      "https://lehu-final-backend.herokuapp.com/videos/movies/isFeatured?isFeatured=true"
    )
      .then((res) => res.json())
      .then((videos) => {
        setFeaturedMovies(videos.body);
        setIsLoadingMovie(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {isLoadingMovie || isLoadingShow ? (
        <Loading />
      ) : (
        <Home movies={featuredMovies} shows={featuredShows} />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
