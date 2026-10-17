import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import DrinkDetails from "./pages/DrinkDetails";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import CursorMovement from "./components/CursorMovement";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CursorMovement />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;