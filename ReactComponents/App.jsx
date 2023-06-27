import React, { useState } from 'react';
import TreeRender from './TreeContainer.jsx';
import MyCalendar from './MyCalendar.jsx';

export default function App () {
  return (
    <div>
      <MyCalendar/>
      <TreeRender/>
    </div>
  );
}