import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const showForm = () => {
    setIsEditing(true);
  };

  const hideForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showForm}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm} />}
    </div>
  );
};

export default NewExpense;
// we had to create a custom event listener in order to get the data from the form which is a child component of this component because react_js has no built in feature for that. and now the form component is expecting a prop which will be a function that will in turn be expecting the data of the form.