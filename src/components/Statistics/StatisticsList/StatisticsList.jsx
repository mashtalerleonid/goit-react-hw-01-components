import StatisticsListItem from 'components/Statistics/StatisticsListItem';
import PropTypes from 'prop-types';
import { Statistics, StatList } from './StatisticsList.styled';

function StatisticsList({ title, stats }) {
  return (
    <Statistics>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(stat => (
          <StatisticsListItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatList>
    </Statistics>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
