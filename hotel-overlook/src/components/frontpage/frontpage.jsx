import Carousel from "./parts/carousel/carousel";
import News from "./parts/news/news";
import "./frontpage.scss";
import { Outlet } from "react-router-dom";


const Frontpage = () => {
  return ( 
  <>
  <Carousel />
  <div className="new">
  <h3>Sidste nyt</h3>
  <News/>
  </div>
  <Outlet/>
  </>
  );
};

export default Frontpage;
