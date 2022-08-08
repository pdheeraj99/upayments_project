import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/common/Header';
import Section from './components/common/Section';
import { DataProvider } from './components/common/Context';

function App() {
  return (
    <DataProvider>
      <div className='app'>
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
