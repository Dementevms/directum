import React from 'react';
import logo from './logo.svg';
import $ from './App.module.scss';
import { Banner } from './components/Banner';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div>
      <Banner/>
      <Welcome/>
    </div>
  );
}

export default App;
