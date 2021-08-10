import "./Details.css";

const Details = (props) => {
  const { video, setPopupTitle, setPopupContent, togglePopup } = props;

  const clickRentBtn = () => {
    setPopupContent(`Rent ${video.title}\nRent Fee: $${video.rentFee}`);
    setPopupTitle(`Rent Video`);
    togglePopup();
  };

  const clickBuyBtn = () => {
    setPopupContent(`Buy ${video.title}\nprice: $${video.buyFee}`);
    setPopupTitle(`Buy Video`);
    togglePopup();
  };

  return (
    <div className="container detailContainer">
      <div className="content">
        <div className="row">
          <div className="col-5 col-lg-4 posterContainer">
            <img className="poster" src={video.smallPoster} alt={video.title} />
          </div>
          <div className="col-7 col-lg-8">
            <h1 className="title">{video.title}</h1>
            <button className="button buttonMargin" onClick={clickRentBtn}>
              Rent: ${video.rentFee}
            </button>
            <button className="button" onClick={clickBuyBtn}>
              Buy: ${video.buyFee}
            </button>
          </div>
        </div>
        <div className="overviewContainer">
          <h3 className="synopsis">Synopsis</h3>
          <p className="overview">{video.description}</p>
        </div>
        <div className="col-12 posterContainer">
          <img className="bigPoster" src={video.bigPoster} alt={video.title} />
        </div>
      </div>
    </div>
  );
};

export default Details;
