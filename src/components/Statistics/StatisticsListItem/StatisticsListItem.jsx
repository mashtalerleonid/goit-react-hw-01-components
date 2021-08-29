import PropTypes from 'prop-types';
import s from './StatisticsListItem.module.css';

function StatisticsListItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{`${percentage}%`}</span>
    </li>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function randomColor() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * 255));
  }

  return `rgb(${arr.join(',')})`;
}

export default StatisticsListItem;
