import "./Content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="row justify-content-center contentContainer">
        <img
          src={`${process.env.PUBLIC_URL}/image/content-banner.jpg`}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Content;
