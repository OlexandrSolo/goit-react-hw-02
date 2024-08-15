import { useEffect, useState } from 'react';
import './App.module.css';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const getInitialReview = () => {
  const checkStorage = localStorage.getItem('user-review');
  return checkStorage !== 0
    ? JSON.parse(checkStorage)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [count, setCount] = useState(getInitialReview);

  useEffect(() => {
    localStorage.setItem('user-review', JSON.stringify(count));
  }, [count]);

  const messages = 'No feedback yet';

  const values = Object.values(count);

  const totalSize = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const updateFeedback = feedbackType => {
    setCount({
      ...feedbackType,
    });
  };
  return (
    <>
      <Description />
      <Options
        options={count}
        updateFeedback={updateFeedback}
        total={totalSize}
      />
      {totalSize !== 0 ? (
        <Feedback userFeedBack={count} total={totalSize} />
      ) : (
        <Notification textWarning={messages} />
      )}
    </>
  );
}

export default App;
