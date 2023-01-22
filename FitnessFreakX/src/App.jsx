import React from 'react';
import PhysicalFitness from './Pages/PhysicalFitness';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='App px-3'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<PhysicalFitness />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>

      </Routes>
  
    </div>
  );
}

export default App;
