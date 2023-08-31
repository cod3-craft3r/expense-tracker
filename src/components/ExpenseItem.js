import React from "react"; // useState is an inbuilt function that's provided by the react library. this function is used to tell the renderer that the variables that are inside the useState umbrella so to speak should be considered for changes caused by the events, ie, the variables can be declared as `state-variables` & any changes caused to the states of these variables will trigger a re-evaluation/re-rendering of the web-app component.

import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  // now to use the useSate function of the react library, we need to simply call it inside the component function. it cannot be called outside anywhere in the code nor it can be called inside a nested function -> this will generate errors.

  // useState takes an argument which should be the default value that you want renderer to assign to that variable. this function then returns an array of 2 elements - access to this variable as well as a function that can be used to change the state of this variable. now this variable is not just a vanilla variable but a special kind of variable that react_js will manage in the memory. similarly, the function that was returned is a tailored function that will not only perform the updates on the state of the special variable but will also re-render the component wherever the special variable is being used. usage of the special variable still remains the same as with the case of const/hard-coded variables.

  // const [ title, setTitle ] = useState(props.title);
  // console.log('this component was rendered by React_js');    //this will be logged once when the web-app starts & later on everytime when the title or any other state-variable is updated.

  // const clickHandler = () => {
  //   // title = 'Updated '+title;
  //   // console.log(title);    //why this would never work (as a beginner you might guess that it should work now that the title is a string variable & since we're using it inside the h2 tag the web-app should render the updates after the event) & that is because the index_js which is responsible for rendering the entire web-app does the rendering just once in the entire life-cycle of the web-app (ie when the app is first opened in the browser or if refresh is hit). regular variables like this one are not considered for re-evaluation (re-drawing of the components of the app) when their values are changed due to any event/trigger.

  //   setTitle('Updated!');
  //   // react_js manages the states of these variables & always fetches the one that's the latest even when it re-renders a component so that user doesn't have to see stale data.
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__decription">
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
// notice that when telling an event handler what to do upon the target event, we just sorta `point` to the function name w/o the `()` since this would create problems when the JSX is parsed at runtime, the function_name() will be executed by the parser then & there before moving on.
