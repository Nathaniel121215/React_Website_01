import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home/> */}
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/sign-up' element={<Test />}/>
        </Routes>
      </Router>
      




      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router> */}
        
    </>
  );
}

export default App;
