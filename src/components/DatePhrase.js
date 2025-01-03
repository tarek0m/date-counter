import React from 'react';
import { addDays } from '../utils/addDays';

function DatePhrase({ realCount }) {
  return (
    <div className='phrase capitalize'>
      {realCount > 0 ? (
        <span>{realCount} day(s) from today is</span>
      ) : realCount === 0 ? (
        <span>today is</span>
      ) : (
        <span>{realCount * -1} day(s) ago was</span>
      )}{' '}
      {addDays(realCount)}
    </div>
  );
}

export default DatePhrase;
