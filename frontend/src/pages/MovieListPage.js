import { useEffect, useState } from "react";

import Loading from "../components/General/Loading";
import VideoList from "../components/Video/VideoList";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/videos/movies")
      .then((res) => res.json())
      .then((videos) => {
        setMovies(videos.body);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <Loading /> : <VideoList title="Movies" content={movies} />}
      <Footer />
    </div>
  );
};

export default MovieListPage;
