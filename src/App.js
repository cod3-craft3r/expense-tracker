import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Ice Cream",
    amount: 94.12,
    date: new Date(2023, 4, 24),
  },
  { id: "e2", title: "Fuel", amount: 799.49, date: new Date(2023, 5, 9) },
  {
    id: "e3",
    title: "Sugar",
    amount: 294.67,
    date: new Date(2023, 4, 28),
  },
  {
    id: "e4",
    title: "Gulab Jamun",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
// we just used `items` instead of expenses to avoid any confusion. now, we need to access all data elements using this name, ie `items` in whatever component we send this as a prop.