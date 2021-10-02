import PropTypes from 'prop-types';
import TransactionRow from 'components/TransactionHistory/TransactionRow';
import { Table, Th } from './TransactionTable.styled';

function TransactionTable({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
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
    </Table>
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
