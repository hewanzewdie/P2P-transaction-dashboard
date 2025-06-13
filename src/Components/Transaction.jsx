import Status from "./Status";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Transaction({ id, sName, rName, amount, status, darkMode }) {
  const linkStyle = darkMode ? "text-decoration-none text-light" : "text-decoration-none text-dark";

  return (
    <tr>
      <td>
        <Link to={`/transaction/${id}`} className={linkStyle}>{id}</Link>
      </td>
      <td>
        <Link to={`/transaction/${id}`} className={linkStyle}>{sName}</Link>
      </td>
      <td>
        <Link to={`/transaction/${id}`} className={linkStyle}>{rName}</Link>
      </td>
      <td>
        <Link to={`/transaction/${id}`} className={linkStyle}>{amount}</Link>
      </td>
      <td>
        <Link to={`/transaction/${id}`}>
          <Status status={status} />
        </Link>
      </td>
    </tr>
  );
}

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  sName: PropTypes.string.isRequired,
  rName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
