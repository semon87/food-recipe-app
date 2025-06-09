import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData,setFoodId }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </>
  );
}
