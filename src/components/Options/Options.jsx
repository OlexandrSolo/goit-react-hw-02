import PropTypes from 'prop-types';
import style from './Options.module.css';

export default function Options({ updateFeedback, setCount, allFeedback }) {
  return (
    <>
      <ul className={style.optionsList}>
        <li>
          <button onClick={() => updateFeedback('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('bad')}>Bad</button>
        </li>
        {allFeedback !== 0 && (
          <li>
            <button onClick={() => setCount({ good: 0, neutral: 0, bad: 0 })}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

// Options.propTypes = {
//   type: PropTypes.string.isRequired,
//   refreshFeedback: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
// };
