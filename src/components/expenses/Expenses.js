import { useEffect, useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import useHttp from "../../hooks/useHttp";
import { getAllExpenses } from "../../api/expenseService";
import LoadingSpinner from "../UI/LoadingSpinner";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const { sendRequest, status, data, error } = useHttp(getAllExpenses, true);
  console.log(data);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (status === "comleted" && !data && data.length === 0) {
    return <p>Not found</p>;
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
