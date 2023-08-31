import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "./UI/Card";
import "./Expenses.css";

function Expenses(props) {
  //yes, we need to take only `props` as an argument as React_js sends only that...but we can use that one big argument as a wrapper around whatever else that we need in this component.

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (yr) => {
    setFilteredYear(yr);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
// JS works in such a way that if the first condition is true, then the part after the `and` operator is rendered
// we could've also used a ternary operator like: -
// {filteredExpenses.length === 0 ? 
// (<p>forgot to add expenses or are you a miser?</p>) : (
//  filteredExpenses.map((expense) => (
//   <ExpenseItem
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//   />
// )))}
// but since that's cumbersome to read & doesn't look too good if it was a bit lengthier, it's better to split it up as we've done above