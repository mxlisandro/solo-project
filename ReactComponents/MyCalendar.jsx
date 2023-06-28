import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
    <Calendar
      onChange={onChange}
      value={value} />
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {value.toDateString()}
      </p>
    </div>
  );
}