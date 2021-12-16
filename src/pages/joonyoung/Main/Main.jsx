import React from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import './Main.scss';

export default function Login() {
  return (
    <main>
      <Story />
      <Sidebar />
      {/* <h1>Hello rowld</h1> */}
    </main>
  );
}
