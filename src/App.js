import React from "react";
import "./App.css";
import { GlobalProvider } from "./components/context/GlobalContext";
import {
  Header,
  Balance,
  Expense,
  TransactionList,
  AddTransaction,
} from "./components";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Expense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
};

export default App;
