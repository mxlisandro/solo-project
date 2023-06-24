// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Calendar</h1>
//         <Month />
//       </div>
//     );
//   }
// }
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';

export default function MyApp() {
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