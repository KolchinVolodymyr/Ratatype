import React, {useContext} from 'react'; 
import './App.scss';
import {DarkModeContext} from './context/DarkModeContext';
import About from './screens/About';
import Service from './screens/Service';
import Home from './screens/Home';
import Header from './components/Header/header';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const {darkMode} = useContext(DarkModeContext);
 
  return (
    <div className={darkMode ? `wrap wrap-dark` : `wrap wrap-light`}>
      <React.StrictMode>
        <Router>
          <Header/>  
          <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/trainer" element={<About />} />
              <Route path="/education" element={<Service />} />
          </Routes> 
        </Router>  
      </React.StrictMode>
    </div>
  );
}

export default App;
