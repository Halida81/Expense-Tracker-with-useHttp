import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { addExpense } from "../../api/expenseService";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/LoadingSpinner";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [errorState, setErrorState] = useState();
  const { sendRequest, status, error } = useHttp(addExpense, true);
  const history = useHistory();
 
  useEffect(() => {
    if (status == "completed" && error) {
      setErrorState(error);
    }
 
    if (status === "completed") {
      history.push("/expenses");
    }
    if(status ==='pending'){
      return ( <LoadingSpinner/>
      )
    }
  }, [status, error, history]);
 
  const AddData = (expenseData) => {
    sendRequest(expenseData);
  
    console.log(expenseData);
    // props.onAddDataToArray(objectWithId);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddData={AddData} error={errorState} />
    </div>
  );
};
export default NewExpense;
