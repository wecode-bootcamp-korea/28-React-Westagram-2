import React from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import './Main.scss';

export default function Login() {
  return (
    <main>
      <Story />
      <Sidebar />
      <Feed />
    </main>
  );
}
