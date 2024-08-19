import { useEffect, useState } from 'react';
import css from './App.module.css';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const getInitialReview = () => {
  const checkStorage = localStorage.getItem('user-review');
  return checkStorage
    ? JSON.parse(checkStorage)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [count, setCount] = useState(getInitialReview);

  useEffect(() => {
    localStorage.setItem('user-review', JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  };

  const messages = 'No feedback yet';

  const values = Object.values(count);
  const totalSize = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const positivePercent =
    totalSize > 0 ? Math.round((count.good / totalSize) * 100) : 0;

  return (
    <div className={css.container}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        defaultOption={setCount}
        allFeedback={totalSize}
      />
      {totalSize !== 0 ? (
        <Feedback
          userFeedBack={count}
          total={totalSize}
          results={positivePercent}
        />
      ) : (
        <Notification textWarning={messages} />
      )}
    </div>
  );
}

export default App;
