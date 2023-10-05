import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import CustomCursor from "./Components/CustomCursor";
import BookAppoinbtn from "./Components/BookAppoinbtn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>

      <BookAppoinbtn />
    </div>
  );
}

export default App;
