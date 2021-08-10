import Title from "../General/Title";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { title, content } = props;

  return (
    <div className="container">
      <Title title={title} />
      <div className="row justify-content-first bookItemcontainer">
        {content.map((video, index) => (
          <VideoItem
            key={index}
            image={video.smallPoster}
            title={video.title}
            id={video.id}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
