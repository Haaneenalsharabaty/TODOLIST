import React, { useRef } from "react";
import "./tracker.css";

function IncomeForm({ income, setIncome }) {
  const description = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        description: description.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    description.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="income-form" onSubmitCapture={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Expense description"
          ref={description}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Expense date"
          ref={date}
        />
        <input type="submit" value="Add Expense" id="Addincome" />
      </div>
    </form>
  );
}

export default IncomeForm;
