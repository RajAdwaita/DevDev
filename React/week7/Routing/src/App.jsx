import './App.css'
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react'
// import Dashboard from lazy(() => './components/Dashboard');

// import Landing from lazy(() => './components/Landing');

import Navbar from './components/Navbar';

// LAZY LOADING 

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* <Route path='/dashboard' element={<Dashboard />} /> */}
              {/* LAZY LOADING */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/' element={<Landing />} />

            </Routes>

          </Suspense>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
