import { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [press, setPress] = useState("false");

  const titleClickHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountClickHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateClickHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    //console.log(expenses);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  if(press === 'false'){
    return(
      <div>
        <button onClick={()=>setPress('true')}>Add new Expense</button>
      </div>
    );
  }
  else if(press === 'true'){
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleClickHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountClickHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateClickHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={()=>setPress('false')}>Cancel</button>
        </div>
      </form>
    );
  }
  
};

export default ExpenseForm;
