// Import the global styles for your application
import "./components/global/global.scss";

// Import the components needed for your application
import AppRouter from "./components/approuter/approuter";
import NavBar from "./components/global/navbar/navbar";
import GFooter from "./components/global/footer/footer";

function App() {
  return (
    // Render the main App component, which includes the NavBar, AppRouter, and GFooter components
    <div className="App">
      <NavBar />       {/* Render the navigation bar */}
      <AppRouter />    {/* Render the main content of your application */}
      <GFooter />      {/* Render the global footer */}
    </div>
  );
}

export default App;
