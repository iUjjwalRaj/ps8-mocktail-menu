import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import DrinkDetails from "./pages/DrinkDetails";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  useEffect(() => {
    let animationFrameId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      document.documentElement.style.setProperty("--cursor-x", `${currentX.toFixed(1)}px`);
      document.documentElement.style.setProperty("--cursor-y", `${currentY.toFixed(1)}px`);
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="cursor-spotlight" aria-hidden="true" />
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