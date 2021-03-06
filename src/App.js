import React from 'react';
import Header from './components/common/Header';
import Body from './components/CustomerEnquiryLogic';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
