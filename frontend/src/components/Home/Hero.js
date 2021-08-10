import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

import "./Hero.css";

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
  };

  const fadeImages = [
    `${process.env.PUBLIC_URL}/image/best-captain-america.jpg`,
    `${process.env.PUBLIC_URL}/image/best-movie-banner.jpg`,
    `${process.env.PUBLIC_URL}/image/best-show-banner.jpg`,
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="slide-container">
          <Slider {...settings}>
            {fadeImages.map((banner, index) => (
              <div key={index}>
                <img src={banner} className="heroBanner" alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
