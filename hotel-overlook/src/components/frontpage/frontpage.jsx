import Carousel from "./parts/carousel/carousel";
import News from "./parts/news/news";
import "./frontpage.scss";
import { Outlet } from "react-router-dom";

const Frontpage = () => {
  return ( 
  <>
   <Outlet/>
  <Carousel />
  <div className="new">
  <h3>Sidste nyt</h3>
  <News/>
  </div>
  </>
  );
};

export default Frontpage;
