import { Route, Routes } from "react-router-dom";
import Hotels from "../hotels/hotels";
import Rooms from "../rooms/rooms";
import Reservation from "../resevation/reservation";
import Login from "../login/login";
import Frontpage from "../frontpage/frontpage";
import Error404 from "../pageNotFound/error404";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Frontpage/>} />
      <Route path="/Hoteller" element={<Hotels />} />
      <Route path="/Værelser" element={<Rooms />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
