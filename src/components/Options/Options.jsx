import style from './Options.module.css';

export default function Options({ options, updateFeedback, total }) {
  const userOutput = key => {
    updateFeedback({
      ...options,
      [key]: Number(options[key]) + 1,
    });
  };

  return (
    <div>
      <ul className={style.optionsList}>
        <li>
          <button onClick={() => userOutput('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => userOutput('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => userOutput('bad')}>Bad</button>
        </li>
        {total !== 0 && (
          <li>
            <button
              onClick={() =>
                updateFeedback({
                  good: 0,
                  neutral: 0,
                  bad: 0,
                })
              }
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
