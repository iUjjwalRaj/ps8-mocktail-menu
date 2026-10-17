import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch drinks");
        return res.json();
      })
      .then((data) => {
        setDrinks(data.drinks || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--card-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--card-y", `${e.clientY - rect.top}px`);
  };

  const filteredDrinks = drinks.filter((drink) =>
    drink.strDrink.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="drinks-container">
      <h1>Non-Alcoholic Drinks</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search mocktails by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <p className="status-message">Loading drinks...</p>}
      {error && !loading && <p className="status-message status-error">{error}</p>}
      {!loading && !error && filteredDrinks.length === 0 && (
        <p className="status-message status-empty">No drinks found matching your search.</p>
      )}

      <div className="drinks-grid">
        {filteredDrinks.map((drink) => (
          <Link
            to={`/drinks/${drink.idDrink}`}
            key={drink.idDrink}
            className="drink-card"
            onMouseMove={handleCardMouseMove}
          >
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <h3>{drink.strDrink}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Drinks;
