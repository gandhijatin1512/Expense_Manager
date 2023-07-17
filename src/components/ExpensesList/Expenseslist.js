import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  let expenseLength = <p>No Response Found</p>;
  if (props.item.length > 0) {
    expenseLength = props.item.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }
  return(
    <div>
    {expenseLength}
    </div>
  );
};

export default ExpensesList;
