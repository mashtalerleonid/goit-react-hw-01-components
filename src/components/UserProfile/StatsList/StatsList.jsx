import StatListItem from 'components/UserProfile/StatsListItem';
import PropTypes from 'prop-types';
import s from './StatsList.module.css';

function StatsList({ stats }) {
  const keys = Object.keys(stats);
  return (
    <ul className={s.stats}>
      {keys.map(key => (
        <StatListItem key={key} label={key} quantity={stats[key]} />
      ))}
    </ul>
  );
}

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default StatsList;
