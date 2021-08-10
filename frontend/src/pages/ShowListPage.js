import { useEffect, useState } from "react";

import Loading from "../components/General/Loading";
import VideoList from "../components/Video/VideoList";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const ShowListPage = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000.com/videos/shows")
      .then((res) => res.json())
      .then((videos) => {
        setShows(videos.body);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <Loading /> : <VideoList title="TV Shows" content={shows} />}
      <Footer />
    </div>
  );
};

export default ShowListPage;
