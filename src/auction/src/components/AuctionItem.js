import { useContext, useState } from "react";

import MealItemForm from "./AuctionItemForm";
import classes from "./AuctionItem.module.css";
import CartContext from "./cart-context";
import Timer from "./Timer";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const props1 = props.meal;
  const [upPrice, setPrice] = useState(props1.price);
  const price = `Base Price:₹${props1.price.toFixed(2)}`;

  // console.log(upPrice)
  const priceUpdateHandler = (amount) => {
    setPrice(amount);
  };

  const addToCartHandler = (amount, upPrice) => {
    cartCtx.addItem({
      id: props1.id,
      name: props1.name,
      amount: amount,
      price: upPrice,
    });
  };

  return (
    <div className={classes.meal}>
      <img className={classes.meal_img} src={props1.src} alt="" />
      <Timer due={props1.due} />

      <h3>{props1.name}</h3>
      <div className={classes.description}>{props1.description}</div>
      <div className={classes.price}>{price}</div>

      <MealItemForm
        onAddToCart={addToCartHandler}
        price={props1.price.toFixed(0)}
        onPriceUpdate={priceUpdateHandler}
        upPrice={upPrice}
      />
    </div>
  );
};

export default MealItem;
