import React, { useState } from "react";
import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";

import Expense from "./components/Expenses/Expense";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 1, 1),
  },
  {
    id: "2",
    title: "Boost",
    amount: 84.12,
    date: new Date(2020, 3, 1),
  },
  {
    id: "3",
    title: "Bread",
    amount: 84.12,
    date: new Date(2021, 3, 1),
  },
  {
    id: "4",
    title: "Washing Powder",
    amount: 89.12,
    date: new Date(2022, 3, 1),
  },
  {
    id: "5",
    title: "noodles",
    amount: 84.12,
    date: new Date(2021, 3, 15),
  },
  {
    id: "6",
    title: "gogles",
    amount: 84.12,
    date: new Date(2020, 1, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpence={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
