import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import CustomCursor from "./Components/CustomCursor";
import BookAppoinbtn from "./Components/BookAppoinbtn";

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <CustomCursor /> */}
      <BookAppoinbtn />
    </div>
  );
}

export default App;
