import PropTypes from 'prop-types';
import { Item, Label, Quantity } from './StatsListItem.styled';

function StatListItem({ label, quantity }) {
  return (
    <Item>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
}

StatListItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatListItem;
