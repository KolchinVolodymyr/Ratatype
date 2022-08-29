import React, {useState} from 'react';
import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';
const initialWords = generate();

function Home() {
    const [leftPadding, setLeftPadding] = useState(
        new Array(20).fill(' ').join(''),
      );
      const [outgoingChars, setOutgoingChars] = useState('');
      const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
      const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
    
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
          if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars +=' ' + generate();
          }
          setIncomingChars(updatedIncomingChars);
        }
      });
    
    return (
        <section>
            <div className="container">
                <h1>Home</h1>
                <p className="character">
                    <span className="character-out">
                        <img src='/assets/Group.png' alt='bird'/>
                    </span>
                    <span className="character-current">{currentChar}</span>
                    <span>{incomingChars.substr(0, 40)}</span>
                </p>
            </div>
        </section>
    )
}

export default Home