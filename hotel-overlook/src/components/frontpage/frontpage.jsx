import Carousel from "./parts/carousel/carousel";
import News from "./parts/news/news";

const Frontpage = () => {
  return ( 
  <>
  <Carousel />
  <h3>Sidste nyt</h3>
  <div className="new">
  <News/>
  </div>
  </>
  );
};

export default Frontpage;
