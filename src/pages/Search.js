import React, { useState } from 'react';
import '../assets/style/search.css';

//export default function search (){
    
 const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [characterName, setCharacterName] = useState("");
     
    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

};
 const generateHash =(timeStamp) => {
    return md5(timeStamp + publicKey + privateKey);
 }
    
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