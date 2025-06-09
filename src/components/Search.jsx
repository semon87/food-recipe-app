import { useEffect, useState } from "react";
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
 const API_KEY = "417ff73c94a94537a4e7b6536c34c2d9";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <>
      <div className={styles.container}>
        <input className={styles.box}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
        />
      </div>
    </>
  );
}
