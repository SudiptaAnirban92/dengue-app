import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Input from './components/Input';
import Prediction from './components/Prediction';


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Input />
      <Prediction />
    </div>
  );
}

export default App;
