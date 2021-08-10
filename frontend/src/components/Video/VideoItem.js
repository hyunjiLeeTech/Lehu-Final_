import { Link } from "react-router-dom";

import "./VideoItem.css";

const VideoItem = (props) => {
  const { id, title, image } = props;
  const linkUrl = "/video/" + id;
  return (
    <div className="col-6 col-md-4 col-lg-2 videoContainer">
      <div className="text-center">
        <Link to={linkUrl}>
          <img className="image" src={image} alt={title} />
        </Link>
        <Link to={linkUrl} className="videoLink">
          <div className="videoTitle">
            <h4>{title}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoItem;
