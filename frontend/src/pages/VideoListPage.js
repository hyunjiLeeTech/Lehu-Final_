import { useState, useEffect } from "react";

import VideoList from "../components/Video/VideoList";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import Loading from "../components/General/Loading";

const VideoListPage = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://lehu-final-backend.herokuapp.com/videos")
      .then((res) => res.json())
      .then((videos) => {
        setVideos(videos.body);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <VideoList title="Movies & TV Shows" content={videos} />
      )}
      <Footer />
    </div>
  );
};

export default VideoListPage;
