import { Route, Routes } from "react-router-dom";
import Hotels from "../hotels/hotels";
import Rooms from "../rooms/rooms";
import Reservation from "../resevation/reservation";
import Login from "../login/login";
import Frontpage from "../frontpage/frontpage";
import ErrorPage from "../pageNotFound/error404";

const AppRouter = () => {
  return (
    <Routes>
      {/* Define a route for the front page */}
      <Route path="/" element={<Frontpage />}>
        <Route path=":id" element={}/>
      </Route>

      {/* Define a route for the "Hotels" component */}
      <Route path="/Hoteller" element={<Hotels />} />

      {/* Define a route for the "Rooms" component */}
      <Route path="/Værelser" element={<Rooms />} />

      {/* Define a route for the "Reservation" component */}
      <Route path="/Reservation" element={<Reservation />} />

      {/* Define a route for the "Login" component */}
      <Route path="/Login" element={<Login />} />

      {/* Define a fallback route for any other paths */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
