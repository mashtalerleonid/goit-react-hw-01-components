import PropTypes from 'prop-types';
import s from './TransactionTable.module.css';
import TransactionRow from 'components/TransactionHistory/TransactionRow';

function TransactionTable({ items }) {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionRow
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionTable;
