import StatListItem from 'components/UserProfile/StatsListItem';
import PropTypes from 'prop-types';
import { Stats } from './StatsList.styled';

function StatsList({ stats }) {
  const keys = Object.keys(stats);
  return (
    <Stats>
      {keys.map(key => (
        <StatListItem key={key} label={key} quantity={stats[key]} />
      ))}
    </Stats>
  );
}

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default StatsList;
