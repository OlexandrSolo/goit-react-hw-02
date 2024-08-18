import PropTypes from 'prop-types';
import style from './Feedback.module.css';

export default function Feedback({ userFeedBack, results, total }) {
  return (
    <>
      <ul>
        <li>
          <p>Good: {userFeedBack.good}</p>
        </li>
        <li>
          <p>Neutral: {userFeedBack.neutral}</p>
        </li>
        <li>
          <p>Bad: {userFeedBack.bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive: {results}%</p>
        </li>
      </ul>
    </>
  );
}

Feedback.propTypes = {
  userFeedBack: PropTypes.object.isRequired,
  results: PropTypes.number,
  total: PropTypes.number,
};
