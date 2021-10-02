import PropTypes from 'prop-types';
import { Tr, Td, TdFirst } from './TransactionRow.styled';

function TransactionRow({ type, amount, currency }) {
  return (
    <Tr>
      <TdFirst>{type}</TdFirst>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionRow;
