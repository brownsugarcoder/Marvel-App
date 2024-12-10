import React from 'react';

const Charactercard = ({children}) => {
    return (
        <div className="character-card">{children} 
            <h2>  testing character card </h2>
        </div>
    );
};

export default Charactercard;