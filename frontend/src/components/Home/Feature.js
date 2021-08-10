import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";

import "./Feature.css";

const Feature = (props) => {
  const { section, videos } = props;

  const renderFeature = (video) => {
    return (
      <div key={video.id} className="col featureContainer">
        <div>
          <Link to={`/video/${video.id}`}>
            <img
              src={video.smallPoster}
              className="featureImg"
              alt={video.title}
            />
          </Link>
        </div>
        <div className="featureTitleContainer">
          <Link className="featureTitleLink" to={"/details/" + video.id}>
            <h6 className="featureTitle">{video.title}</h6>
          </Link>
        </div>
      </div>
    );
  };

  const renderFeatures = () => {
    let featuredVideos = [];
    for (let video of videos) {
      featuredVideos.push(renderFeature(video));
    }

    return featuredVideos;
  };

  return (
    <div className="container">
      <div className="row justify-content-first">
        <div className="col-9 section">{section}</div>
      </div>
      <div className="row justify-content-first">
        <ScrollMenu data={renderFeatures()} />
      </div>
    </div>
  );
};

export default Feature;
