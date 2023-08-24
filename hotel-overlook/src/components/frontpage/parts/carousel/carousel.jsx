import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.scss";




const items = [
  <img
    src={require("./carousel img/center-square-wroclaw.jpg")}
    alt="center-square-wroclaw"
  />,
  <img
    src={require("./carousel img/city-houses-reykjavik.jpg")}
    alt="city-houses-reykjavik"
  />,
  <img
    src={require("./carousel img/fishmarket-hamborg.jpg")}
    alt="fishmarket-hamborg"
  />,
  <img
    src={require("./carousel img/frankfurt-skyline-germany.jpg")}
    alt="frankfurt-skyline-germany"
  />,
  <img
    src={require("./carousel img/gdansk-center-church-poland.jpg")}
    alt="gdansk-center-church-poland"
  />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      autoHeight="true"
      autoPlay="true"
      animationDuration="2000"
      autoPlayInterval="1000"
      disableDotsControls="true"
      infinite="true"
      disableButtonsControls="true"
      items={items}
    />
  );
};

export default Carousel;