import React from 'react';

function About(props) {
    
    return (
        <section>
            <div className='container'>
                <p className="character">
                    <span className="character-out">
                        <img src='/assets/Group.png' alt='bird'/>
                    </span>
                    <span className="character-current">{props.currentChar}</span>
                    <span>{props.incomingChars.substr(0, 40)}</span>
                </p>        
            </div>
        </section>
    )
}

export default About