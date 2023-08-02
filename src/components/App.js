import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './functioncomp/REACT Projects/Calculator';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App;
