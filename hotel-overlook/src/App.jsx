import "./components/global/global.scss";
import AppRouter from "./components/approuter/approuter";
import NavBar from "./components/global/navbar/navbar";
import GFooter from "./components/global/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <GFooter />
    </div>
  );
}

export default App;
