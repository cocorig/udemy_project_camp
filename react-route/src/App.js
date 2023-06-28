import React from 'react';
import {BrowserRouter as Router ,  Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SearchResult from './pages/searchResult';
function App() {
  
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Profiles/:username' element={<Profile/>}/>
        <Route path='/search' element={<SearchResult/>}/>
      </Routes>
      <Footer/>
    </Router>
        
        
        
       
  );
}

export default App;
