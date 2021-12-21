import React, { useState, useEffect } from "react";
import Header from "./Header";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";
import "./tracker.css";

function Tracker() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="main">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}
export default Tracker;
