import { useState } from 'react';
import './App.module.css';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalSize = Object.values(count).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const updateFeedback = feedbackType => {
    setCount({ ...feedbackType });
  };
  return (
    <>
      <Description />
      <Options options={count} updateFeedback={updateFeedback} />
      {totalSize !== 0 && <Feedback userFeedBack={count} total={totalSize} />}
    </>
  );
}

export default App;
