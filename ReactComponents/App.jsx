import React, { useState } from 'react';
import TreeRender from './TreeContainer.jsx';
import MyCalendar from './MyCalendar.jsx';

export default function App () {
  return (
    <div>
      <div style={{paddingLeft: 150}}><MyCalendar/></div>
      <div><TreeRender/></div>
    </div>
  );
}