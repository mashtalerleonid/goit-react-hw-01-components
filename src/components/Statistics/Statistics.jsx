import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map(stat => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

function randomColor() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * 255));
  }

  return `rgb(${arr.join(',')})`;
}
