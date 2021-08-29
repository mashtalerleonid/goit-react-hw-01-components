import PropTypes from 'prop-types';
import s from './TransactionRow.module.css';

function TransactionRow({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionRow;
