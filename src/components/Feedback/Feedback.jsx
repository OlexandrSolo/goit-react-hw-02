import PropTypes from 'prop-types';
import style from './Feedback.module.css';

export default function Feedback({ userFeedBack, total }) {
  const positivePercent = total > 0 ? (userFeedBack.good / total) * 100 : 0;
  return (
    <div>
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
          <p>Positive: {positivePercent.toFixed()}%</p>
        </li>
      </ul>
    </div>
  );
}

Feedback.PropTypes = {
  userFeedBack: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
};
