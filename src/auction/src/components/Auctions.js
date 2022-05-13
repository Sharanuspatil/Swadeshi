import { Fragment } from "react";

import MealsSummary from "./AuctionsSummary";
import AvailableMeals from "./AvailableAuctions";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
