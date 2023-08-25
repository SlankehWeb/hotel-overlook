// Import the necessary components and styles
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.scss";

// Create an array of items
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

// Define a functional component
const Carousel = () => {
  return (
    <AliceCarousel
      // Enable mouse tracking for the carousel
      mouseTracking
      // Enable automatic height adjustment based on the content
      autoHeight="true"
      // Enable autoplay for the carousel
      autoPlay="true"
      // Set the animation duration for slide transitions to 2000ms (2 seconds)
      animationDuration="2000"
      // Set the autoplay interval to 1000ms (1 second)
      autoPlayInterval="1000"
      // Disable the dots navigation controls
      disableDotsControls="true"
      // Enable infinite looping of carousel items
      infinite="true"
      // Disable the buttons navigation controls (previous and next)
      disableButtonsControls="true"
      // Pass the array of items to the carousel
      items={items}
    />
  );
};

// Export the Carousel component as the default export
export default Carousel;