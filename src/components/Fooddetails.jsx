import { useState, useEffect } from "react";
import styles from "./fooddetails.module.css";

export default function Fooddetails({ foodId, setFoodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "Your_api_key";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.foodDetailsContainer}>
      <div className={styles.foodDetails}>
        <h1 className={styles.foodTitle}>{food.title}</h1>
        <img src={food.image} alt={food.title} className={styles.foodImage} />
        <div className={styles.foodInfo}>
          <span className={styles.foodTime}>
            <strong>{food.readyInMinutes}</strong> mins
          </span>
          <span className={styles.foodServings}>
            <strong>Serves {food.servings}</strong>
          </span>
          <span className={styles.foodType}>
            {food.vegetarian ? "🍆 Vegetarian" : "🍖 Non Vegetarian"}
          </span>
          <span className={styles.foodPrice}>
            $ {food.pricePerServing} Taka per serving
          </span>
        </div>

        <h2>Ingredients</h2>
        {food.extendedIngredients ? (
          food.extendedIngredients.map((item, index) => (
            <div key={index} className={styles.ingredientItem}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                alt={item.name}
                className={styles.ingredientImage}
              />
              <h3>
                {item.name} {item.amount} {item.unit}
              </h3>
            </div>
          ))
        ) : (
          <p>Loading ingredients...</p>
        )}

        <div className={styles.foodInstructions}>
          <h2>Instructions</h2>
          {isLoading ? (
            <p className={styles.loading}>...Loading...</p>
          ) : (
            food.analyzedInstructions[0]?.steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
