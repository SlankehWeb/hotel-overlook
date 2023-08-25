import Carousel from "./parts/carousel/carousel";
import News from "./parts/news/news";
import "./frontpage.scss";

const Frontpage = () => {
  return ( 
  <>
  <Carousel />

  <div className="new">
  <h3>Sidste nyt</h3>
  <News/>
  </div>
  </>
  );
};

export default Frontpage;
