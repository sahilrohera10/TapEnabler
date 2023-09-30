import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import CustomCursor from "./Components/CustomCursor";
import BookAppoinbtn from "./Components/BookAppoinbtn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
        </Routes>
      </BrowserRouter>

      <BookAppoinbtn />
    </div>
  );
}

export default App;
