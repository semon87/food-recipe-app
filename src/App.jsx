import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Fooddetails from "./components/Fooddetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("658615");
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
        <InnerContainer>
          <Fooddetails foodId={foodId} setFoodId={setFoodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
