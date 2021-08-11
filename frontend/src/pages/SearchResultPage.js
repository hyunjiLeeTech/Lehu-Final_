import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/General/Footer";
import Header from "../components/General/Header";
import SearchResult from "../components/SearchResult/SearchResult";
import Loading from "../components/General/Loading";

const SearchResultPage = ({
  setPopupTitle,
  setPopupContent,
  togglePopup,
  isPopupOpen,
}) => {
  const { title } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://lehu-final-backend.herokuapp.com/videos/title?title=${title}`
    )
      .then((res) => res.json())
      .then((video) => {
        setVideos(video.body);
        setIsLoading(false);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <SearchResult
          pageTitle="Search Result"
          content={videos}
          setPopupTitle={setPopupTitle}
          setPopupContent={setPopupContent}
          togglePopup={togglePopup}
        />
      )}
      <Footer />
    </div>
  );
};

export default SearchResultPage;
