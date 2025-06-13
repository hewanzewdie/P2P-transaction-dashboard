import Status from "./Status";
import { useParams, Link } from "react-router-dom";

export default function TransactionDetail({ transactions, darkMode }) {
  const { id } = useParams();

  const transaction = transactions.find((t) => String(t.id) === id);

  if (!transaction) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <p className="mb-4">Transaction not found</p>
        <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
      </div>
    );
  }

  const { sName, rName, amount, status } = transaction;

  const detailClass = darkMode ? "card-body p-4 p-md-5 bg-dark text-light" : "card-body p-4 p-md-5"
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h1 className="fw-bold text-center text-md-start mb-3 mb-md-0">Transaction Detail</h1>
            <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
          </div>
          
          <div className="container shadow-lg border-0 rounded-5">
            <div className={detailClass}>
              <div className="row g-4">
                
                  <p className="fw-bold mb-0">Transaction ID</p>
                  <p className="text-secondary">{id}</p>
               
                
                  <p className="fw-bold mb-0">Status</p>
                  <Status status={status} />
               
                
                  <p className="fw-bold mb-0">Sender</p>
                  <p className="text-secondary">{sName}</p>
               
                
                  <p className="fw-bold mb-0">Receiver</p>
                  <p className="text-secondary">{rName}</p>
               
                
                  <p className="fw-bold mb-0">Amount</p>
                  <p className="text-secondary">${amount}</p>
               
                
                  <p className="fw-bold mb-0">Transaction Type</p>
                  <p className="text-secondary">Payment</p>
               
                
                  <p className="fw-bold mb-0">Payment Method</p>
                  <p className="text-secondary">Credit card</p>
               
                
                  <p className="fw-bold mb-0">Timestamp</p>
                  <p className="text-secondary">2/8/2023, 4:56:23 PM</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}