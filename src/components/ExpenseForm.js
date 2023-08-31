import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newExpenseTitle, setNewExpenseTitle] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");
  const [newExpenseDate, setNewExpenseDate] = useState("");
  // the above way of managing states is a valid and normal approach however, we can also do

  // const [userInput, setUserInput] = useState({
  //   newExpenseTitle: '',
  //   newExpenseAmount: '',
  //   newExpenseDate: ''
  // });
  // and now we have an object to manage all these states. the advantage being that of easier management (if the no. of such states rises)

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,   //spread operator copies the values from the existing object
    //   newExpenseTitle: event.target.value  //and then we can just update whatever field we want, rest all fields remain the same
    // });
    // however that is not the optimal way to manage states as react_js schedules updates & the above approach fails if there are a lot of state updates to be scheduled at the same time

    // setUserInput((prevState) => {
    //   return { ...prevState, newExpenseTitle: event.target.value};
    // });
    // this approach gets a snapshot of the previous state & so react_js schedules the updates such that you always get the latest snapshot of the state. you should always remember that you have to use this arrow function syntax whenever the new state is dependent on the previous state

    setNewExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // we did this because as you've learnt, in vanilla web-dev whenever a form is submitted, it reloads the page, sends the filled form data back to the server hosting the webpage, but here we don't wanna do that primarily to prevent the page from being reloaded

    const newExpenseData = {
      title: newExpenseTitle,
      amount: +newExpenseAmount,
      date: new Date(newExpenseDate),
    };

    props.onSaveExpenseData(newExpenseData);
    setNewExpenseTitle("");   //this is done so that the value attribute of the input fields will have the new values set as their final defaults after the form is submitted. this is called two-way binding, especially useful in case of input forms
    setNewExpenseAmount("");
    setNewExpenseDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpenseTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={newExpenseAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newExpenseDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
