import React from "react";
import "./tracker.css";

function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div className="description">{income.description}</div>
      <div className="price">JOD{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  );
}

export default IncomeItem;
