import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.fooditem}>
      <img src={food.image} alt={food.title} className={styles.foodimg} />
      <h1 className={styles.foodtitle}>{food.title}</h1>
      <button onClick={()=>setFoodId(food.id)} 
      className={styles.viewrecipebtn}>
        View recipe
      </button>
    </div>
  );
}
