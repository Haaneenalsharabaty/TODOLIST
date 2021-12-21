import React from "react";
import "./tracker.css";

function Header({ totalIncome }) {
  return (
    <header className="tracker">
      <h1>Expense Tracker</h1>
      <div className="total-income"> The Total Is {totalIncome}JOD</div>
    </header>
  );
}

export default Header;
