import React from 'react';
import { addDays } from '../utils/addDays';

function DatePhrase({ count }) {
  return (
    <div className='phrase capitalize'>
      {count > 0 ? (
        <span>{count} day(s) from today is</span>
      ) : count == 0 ? (
        <span>today is</span>
      ) : (
        <span>{count * -1} day(s) ago was</span>
      )}{' '}
      {addDays(count)}
    </div>
  );
}

export default DatePhrase;
