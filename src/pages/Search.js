import React, { useState } from 'react';
import md5 from "md5"; 
import '../assets/style/search.css';

//export default function search (){
    
 const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
     
    const timeStamp = new Date().getTime();
    const generateHash =(timeStamp) => {
        const publicKey = "afd3b1ec3a319b8d5637dce0cb107083";
        const privateKey = " ";
        return md5(timeStamp + publicKey + privateKey);

}; 

const hash = generateHash(timeStamp);
    
const handleSubmit = () => {
    console.log("Search for:", searchQuery);
    console.log("Generated Hash:", hash);

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
            <div className="buttons"></div>
            <button onClick={handleSubmit}>Search</button>
            <button onClick={handleSubmit}>Reset</button>


            </div>
        </div>
    );

}; 

export default Search;