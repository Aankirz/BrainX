import React from 'react';
import PhysicalFitness from './Pages/PhysicalFitness';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PhysicalFitness />} />

      </Routes>
  
    </div>
  );
}

export default App;
