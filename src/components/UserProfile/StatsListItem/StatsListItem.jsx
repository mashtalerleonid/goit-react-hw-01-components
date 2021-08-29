import PropTypes from 'prop-types';
import s from './StatsListItem.module.css';

function StatListItem({ label, quantity }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.quantity}>{quantity}</span>
    </li>
  );
}

StatListItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatListItem;
