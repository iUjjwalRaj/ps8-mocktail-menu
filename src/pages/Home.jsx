import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Mocktail Menu</h1>
        <p>Explore our handcrafted collection of non-alcoholic drinks and find your perfect match.</p>
        <button onClick={() => navigate("/drinks")}>Explore Drinks</button>
      </div>
      <img src={heroImg} alt="Mocktail Hero" className="hero-image" />
    </div>
  );
}

export default Home;
