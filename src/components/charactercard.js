import React from 'react';

const Charactercard = ({children}) => {
    return (
        <div className="character-card">{children} 
            <h2>  Hello world </h2>
        </div>
    );
};

export default Charactercard;