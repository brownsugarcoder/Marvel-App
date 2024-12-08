import '../assets/style/search.css';
import React, { useState } from 'react';


//export default function search (){
    
 const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [characterName, setCharacterName] = useState("");
         
    
    const handleSubmit = () => {
        console.log("Search for:", searchQuery);
    };
    return (

        <div className="search">
            <h2>Search Character</h2>
            <div className="search-bar"> 
                <input
                 type="text"
                    placeholder="Search Character"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Character"
            />
            <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );

}; 
export default Search;