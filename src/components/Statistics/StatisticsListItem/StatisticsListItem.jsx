import PropTypes from 'prop-types';
import { Item, Label } from './StatisticsListItem.styled';

function StatisticsListItem({ label, percentage }) {
  return (
    <Item backgroundColor={randomColor()}>
      <Label>{label}</Label>
      <Label>{`${percentage}%`}</Label>
    </Item>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsListItem;

function randomColor() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * 255));
  }

  return `rgb(${arr.join(',')})`;
}
