import React from 'react';
import './App.css';
import PopUp from '../PopUp';

const App: React.FC = () => {
  return (
    <>
      <PopUp isSuccess={true}>Success</PopUp>
      <PopUp isSuccess={false}>Failed</PopUp>
    </>
  );
};

export default App;
