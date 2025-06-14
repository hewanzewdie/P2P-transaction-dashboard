import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateTransaction({ setTransactions }) {
  const [sName, setSName] = useState("");
  const [rName, setRName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("completed");
  const navigate = useNavigate();

  const handleAddTransaction = async (e) => {
    e.preventDefault();

    if (!sName.trim() || !rName.trim() || !amount || !status) {
      return alert("Fill the required fields");
    }

    try {
      const res = await axios.get("https://684d73ee65ed087139162505.mockapi.io/api/transactions/Transaction");
      const transactions = res.data;
      const maxId = transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) : 0;

      const newTransaction = {
        id: maxId + 1,
        sName,
        rName,
        amount: parseFloat(amount),
        status,
      };

      const postRes = await axios.post("https://684d73ee65ed087139162505.mockapi.io/api/transactions/Transaction", newTransaction);

      setTransactions((prev) => [...prev, postRes.data]);

      navigate("/");
    } catch (err) {
      console.error("Failed to add transaction:", err);
      alert("Error saving transaction. Make sure the server is running.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form onSubmit={handleAddTransaction} className="d-flex flex-column justify-content-center w-75 shadow-lg p-5 border-light rounded-5">
        <h2>Create Your Transaction</h2>

        <label htmlFor="sendername" className="fw-bold mb-2">Sender Name</label>
        <input type="text" id="sendername" value={sName} onChange={(e) => setSName(e.target.value)} className="form-control mb-3" />

        <label htmlFor="receivername" className="fw-bold mb-2">Receiver Name</label>
        <input type="text" id="receivername" value={rName} onChange={(e) => setRName(e.target.value)} className="form-control mb-3" />

        <label htmlFor="amount" className="fw-bold mb-2">Amount</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control mb-3" />

        <label htmlFor="status" className="fw-bold mb-2">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select mb-3">
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <Link to="/" className="btn btn-light">Cancel</Link>
          <button type="submit" className="btn btn-primary">Add transaction</button>
        </div>
      </form>
    </div>
  );
}