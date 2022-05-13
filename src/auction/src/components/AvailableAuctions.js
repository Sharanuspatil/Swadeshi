import Card from "./Card";
import classes from "./AvailableAuctions.module.css";
import MealItem from "./AuctionItem";

import F from "../assets/main.jpg";
import A from "../assets/auc1 (1).jpeg";
import B from "../assets/auc1 (2).jpeg";
import C from "../assets/auc1 (3).jpeg";
import D from "../assets/auc1 (4).jpeg";
import G from "../assets/auc1 (5).jpeg";
import H from "../assets/auc1 (6).jpeg";
import I from "../assets/auc1 (7).jpg";
import J from "../assets/auc1 (8).jpeg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Painting",
    description: "Lot of 2 miniature Painting",
    price: 1000,
    due: "July 31 2022 00:00:00",
    src: A,
  },
  {
    id: "m2",
    name: "Zardozi",
    description: " Embroidery using gold and silver threads ",
    price: 16.5,
    due: "July 31 2022 00:00:00",
    src: B,
  },
  {
    id: "m3",
    name: "Brass Handicrafts",
    description: "Made by artisans who are distinctly known as Kansaris",
    price: 12.99,
    due: "July 31 2022 00:00:00",
    src: C,
  },
  {
    id: "m4",
    name: "Kripal Krumbh",
    description: "Turko-Persians origins Pottery",
    price: 198.99,
    due: "July 31 2022 00:00:00",
    src: D,
  },
  {
    id: "m5",
    name: "Gandhidham",
    description: "Old Ancient Vessel",
    price: 22.99,
    due: "July 30 2022 00:00:00",
    src: J,
  },
  {
    id: "m6",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    due: "June 30 2022 00:00:00",
    src: F,
  },
  {
    id: "m7",
    name: "Tabla",
    description: "Antique Tabla Drum IndianCopper",
    price: 64,
    due: "June 30 2022 00:00:00",
    src: G,
  },
  {
    id: "m8",
    name: "Clay Pots",
    description: "Clay Potters By tiruchigadi",
    price: 18.99,
    due: "July 30 2022 00:00:00",
    src: H,
  },
  {
    id: "m9",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    due: "July 30 2020 00:00:00",
    src: I,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {mealsList.map((meal) => {
        return (
          <Card key={meal.key} meal={meal}>
            {meal}
          </Card>
        );
      })}
    </section>
  );
};

export default AvailableMeals;
