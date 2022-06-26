import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { Link } from "react-router-dom";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.text);

  // const clickHandler = () => {
  //   setTitle('Update!');
  // };
  console.log(props.id);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.text}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <Link  to={`/expenses/${props.id}`}>
        <button className="link">View Fullscreen</button>
      </Link>
    </Card>
  );
}

export default ExpenseItem;
