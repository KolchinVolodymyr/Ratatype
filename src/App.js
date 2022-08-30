import React, {useContext, useState} from 'react'; 
import './App.scss';
import {DarkModeContext} from './context/DarkModeContext';
import About from './screens/About';
import Service from './screens/Service';
import Home from './screens/Home';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import useKeyPress from './hooks/useKeyPress';
import { generate } from './utils/words';
const initialWords = generate();

function App() {
  const {darkMode} = useContext(DarkModeContext);
  
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  const handleClickRestart = () => {
    setIncomingChars(generate());
    setCurrentChar(' ');
  }

  //crutch
  //data entry from a mobile device
  const handleChangeInput = (e) => {    
      //1
      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      //2
      if (e.target.value === currentChar) {
        //3
        if (leftPadding.length > 0) {
          setLeftPadding(leftPadding.substring(1));
        }
        //4
        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);
        
        //5      
        setCurrentChar(incomingChars.charAt(0));
        
        //6
        updatedIncomingChars = incomingChars.substring(1);
  
        setIncomingChars(updatedIncomingChars);
      }
     
  }

  //data entry for computers (that have a physical keyboard)
  useKeyPress(key => {
    //1
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    //2
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      
      //5      
      setCurrentChar(incomingChars.charAt(0));
      
      //6
      updatedIncomingChars = incomingChars.substring(1);

      setIncomingChars(updatedIncomingChars);
    }
  });
  
  return (
    <div className={darkMode ? `wrap wrap-dark` : `wrap wrap-light`}>
      <React.StrictMode>
        <Router>
          <Header handleClickRestart={handleClickRestart}/>  
          <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/trainer" element={<About currentChar={currentChar} incomingChars={incomingChars} handleChangeInput={handleChangeInput}/>} />
              <Route path="/education" element={<Service />} />
          </Routes> 
          <Footer handleClickRestart={handleClickRestart}/>
        </Router>  
      </React.StrictMode>
    </div>
  );
}

export default App;
