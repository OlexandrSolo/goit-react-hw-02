import style from './Options.module.css';
import { useState } from 'react';

export default function Options({ options, updateFeedback }) {
  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => {
              updateFeedback({
                ...options,
                good: options.good + 1,
              });
            }}
          >
            Good: {options.good}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              updateFeedback({
                ...options,
                neutral: options.neutral + 1,
              });
            }}
          >
            Neutral: {options.neutral}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              updateFeedback({
                ...options,
                bad: options.bad + 1,
              });
            }}
          >
            Bad: {options.bad}
          </button>
        </li>
      </ul>
    </div>
  );
}
