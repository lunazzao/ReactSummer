import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  // const expenseDate = new Date(2023, 5,28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button> Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
