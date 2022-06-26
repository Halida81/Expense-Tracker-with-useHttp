import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleExpense } from "../../api/expenseService";
import useHttp from "../../hooks/useHttp";
import HighlightedExpense from "./HighlightedExpense";
import moment from "moment";
const ExpenseDetail = () => {
  const { sendRequest, status, data } = useHttp(getSingleExpense, true);

  const [expense, setExpense] = useState();

  const params = useParams();
  const { expenseId } = params;
  console.log(params);

  useEffect(() => {
    sendRequest(expenseId);
  }, [expenseId]);
  useEffect(() => {
    if (status == "completed") {
      setExpense(data);
    }
  }, [status]);

  const dates =moment().subtract(10, 'days').calendar();
  return (
    <>
      {expense && (
        <HighlightedExpense
          text={data.title}
          price={data.amount}
          date={dates}
        />
      )}
    </>
  );
};
export default ExpenseDetail;
