import React, {useState} from 'react';
import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';
import { currentTime } from '../utils/time';
const initialWords = generate();

function Home() {
    const [leftPadding, setLeftPadding] = useState(
        new Array(20).fill(' ').join(''),
      );
      const [outgoingChars, setOutgoingChars] = useState('');
      const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
      const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
    
      const [startTime, setStartTime] = useState();
      const [wordCount, setWordCount] = useState(0);
      const [wpm, setWpm] = useState(0);
    
      const [accuracy, setAccuracy] = useState(0);
      const [typedChars, setTypedChars] = useState('');
    
      useKeyPress(key => {
        if (!startTime) {
          setStartTime(currentTime());
        }
    
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        if (key === currentChar) {
          if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
          }
          updatedOutgoingChars += currentChar;
          setOutgoingChars(updatedOutgoingChars);
    
          setCurrentChar(incomingChars.charAt(0));
    
          updatedIncomingChars = incomingChars.substring(1);
          if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars += ' ' + generate();
          }
          setIncomingChars(updatedIncomingChars);
    
          if (incomingChars.charAt(0) === ' ') {
            setWordCount(wordCount + 1);
            const durationInMinutes = (currentTime() - startTime) / 60000.0;
            setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
          }
        }
    
        const updatedTypedChars = typedChars + key;
        setTypedChars(updatedTypedChars);
        setAccuracy(
          ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
            2,
          ),
        );
      });
    
    return (
        <section>
            <div className="container">
                <h1>Home</h1>
                <p className="Character">
                    <span className="Character-out">
                        {/* {(leftPadding + outgoingChars).slice(0)} */}
                        <img src='/assets/Group.png' />
                    </span>
                    <span className="Character-current">{currentChar}</span>
                    <span>{incomingChars.substr(0, 40)}</span>
                </p>
            </div>
        </section>
    )
}

export default Home