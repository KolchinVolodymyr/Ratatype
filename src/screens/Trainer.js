import React from 'react';

function About(props) { 

    return (
        <section>
            <div className='container'>
                <p className="character" onKeyDown={props.handleChangeInput}>
                    <span className="character-out">
                        <img src='/assets/Group.png' alt='bird'/>
                    </span>
                    <span className="character-current">{props.currentChar}</span>
                    <span>{props.incomingChars.substr(0, 40)}</span>
                </p> 
                <input 
                    className='character_input'
                    type="text" 
                    name="name" 
                    value=''
                    onChange={props.handleChangeInput}    
                />       
            </div>
        </section>
    )
}

export default About