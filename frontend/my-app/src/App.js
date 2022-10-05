import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register.jsx'
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/Register' element={<Register/>}>
        </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
