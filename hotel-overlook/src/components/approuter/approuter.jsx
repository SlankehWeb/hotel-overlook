import { Route, Routes } from "react-router-dom";
import Frontpage from "../frontpage/frontpage";
import Hotels from "../hotels/hotels";
import Rooms from "../rooms/rooms";
import Reservation from "../resevation/reservation";
import Login from "../login/login";

const AppRouter = () => {
    return (
      <Routes>
        <Route index element={<Frontpage/>} />
        <Route path="/Hoteller" element={<Hotels/>}/>
        <Route path="/Værelser" element={<Rooms/>} />
        <Route path="/Reservation" element={<Reservation/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    );
  };

  export default AppRouter;