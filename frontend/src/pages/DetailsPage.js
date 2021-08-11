import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Details from "../components/Details/Details";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import Loading from "../components/General/Loading";

const DetailsPage = ({
  setPopupTitle,
  setPopupContent,
  togglePopup,
  isPopupOpen,
}) => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://lehu-final-backend.herokuapp.com/videos/${id}`)
      .then((res) => res.json())
      .then((video) => {
        if (video.errCode === 0) {
          setVideo(video.body[0]);
          setIsLoading(false);
        } else {
          setPopupTitle("Bood Details");
          setPopupContent("Book id not found. Please enter correct book id");
          togglePopup();
          if (!isPopupOpen) {
            window.location.pathname = "/";
          }
        }
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Details
          setPopupTitle={setPopupTitle}
          setPopupContent={setPopupContent}
          togglePopup={togglePopup}
          video={video}
        />
      )}
      <Footer />
    </div>
  );
};

export default DetailsPage;
