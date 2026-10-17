import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DrinkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipe");
        return res.json();
      })
      .then((data) => {
        if (data.drinks && data.drinks.length > 0) {
          setDrink(data.drinks[0]);
        } else {
          setDrink(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const ingredients = [];
  if (drink) {
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          name: ingredient.trim(),
          measure: measure ? measure.trim() : "",
        });
      }
    }
  }

  if (loading) {
    return (
      <div className="details-container">
        <p className="status-message">Loading recipe...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-container">
        <p className="status-message status-error">{error}</p>
        <button onClick={() => navigate("/drinks")} className="back-btn">← Back to Drinks</button>
      </div>
    );
  }

  if (!drink) {
    return (
      <div className="details-container">
        <p className="status-message status-empty">Drink not found.</p>
        <button onClick={() => navigate("/drinks")} className="back-btn">← Back to Drinks</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-btn">← Back to Drinks</button>
      <div className="details-card">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="details-image" />
        <div className="details-content">
          <h1>{drink.strDrink}</h1>
          <p className="details-meta">{drink.strCategory} • {drink.strGlass}</p>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.measure}</span>
              </li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p className="instructions">{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
