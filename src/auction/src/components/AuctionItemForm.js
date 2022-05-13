import Input from "./Input";
import classes from "./AuctionItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  let newPrice = +props.upPrice;
  newPrice = newPrice + newPrice * 0.1;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    console.log(enteredAmount);

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(1, enteredAmount);
    props.onPriceUpdate(enteredAmount);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Bid Amount Rs. "
          input={{
            id: "amount",
            type: "number",
            min: newPrice.toFixed(0),
            defaultValue: newPrice.toFixed(0),
          }}
        />
        <button> Bid</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
