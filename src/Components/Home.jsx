// Home.js
import { Link } from "react-router-dom";
import Transaction from "./Transaction";

import { useEffect } from "react";
import axios from "axios"; // or use fetch


export default function Home({ filter, setFilter, transactions,setTransactions, darkMode }) {

  const tableStyle = darkMode
    ? "w-100 table table-bordered table-hover mt-4 table-dark"
    : "w-100 table table-bordered table-hover mt-4";

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  useEffect(() => {
    axios
      .get("http://localhost:3001/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error("Failed to fetch transactions:", err));
  }, []);

  return (
    <div className="d-flex flex-column m-5">
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <div className="w-100 text-center">
          <h1 className="fw-bold mb-4">P2P Transaction Dashboard</h1>
          <p className="">
            Track and manage all your <span className="fw-bold">P2P transactions</span><br />
            Filter by status, view details, and stay organized
          </p>
        </div>

        <Link to="/create" className="btn btn-primary mt-3 mt-lg-0">Create Transaction</Link>
      </div>

      <div className="align-self-end mt-5">
        <p>Filter transactions by status</p>
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div className="table-responsive">
        <table className={tableStyle}>
          <thead>
            <tr className="table-secondary">
              <th>ID</th>
              <th>SENDER</th>
              <th>RECEIVER</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t) => (
              <Transaction key={t.id} {...t} darkMode={darkMode} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 