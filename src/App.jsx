  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateTransaction from "./Components/CreateTransaction";
import TransactionDetail from "./Components/TransactionDetail";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  }, [darkMode]);

  const [transactions, setTransactions] = useState([]);


  const list = transactions.filter((t) => {
    if (filter === "completed") return t.status === "completed";
    if (filter === "pending") return t.status === "pending";
    if (filter === "failed") return t.status === "failed";
    return true;
  });

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filter={filter}
              setFilter={setFilter}
              transactions={list}
              setTransactions={setTransactions}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateTransaction
              setTransactions={setTransactions}
              transactions={transactions}
            />
          }
        />
        <Route path="/detail" element={<TransactionDetail />} />
        <Route
          path="/transaction/:id"
          element={<TransactionDetail transactions={transactions} darkMode={darkMode} />}
        />
      </Routes>
    </Router>
  );
}