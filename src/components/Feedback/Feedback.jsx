import style from './Feedback.module.css';

export default function Feedback({
  userFeedBack: { good, neutral, bad },
  total,
}) {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive: </p>
        </li>
      </ul>
    </div>
  );
}
