import React, { useState } from 'react';
//require('dotenv').config();
//const crypto = require('crypto')
import md5 from "md5"; 
import '../assets/style/search.css';

//export default function search (){

const API_URL= process.env.REACT_APP_API_KEY_BASE_URL;
//const getHash = (ts,)

const Search = () => {
    //let baseUrl = `${API_URL}/vh1/public/characters`
    //const [searchQuery, setSearchQuery] = useState("");
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [loading, setLoading] = useState(false);
     

    const ts = new Date().getTime(); 
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const hash = getHash('md5').update(ts+privateKey+publicKey)
    
    //let url = `${baseUrl}?`

}; 

//When Submit button is clicked
const handleSubmit = async () => {
    if (characterName) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
          );
          setCharacterName(response.data.data.results || []);
        } catch (error) {
            console.error("Error searching recipes", error);
        } finally {
            setLoading(false);
        }
    }
};

/* return (
    <div className="search">
        <h2>Marvel Characters</h2>
            <div className="search-bar"> 
                <input
                 type="text"
                    placeholder="Search Character"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    placeholder="Enter Character"
                />
             </div>
            <div className="buttons">
            <button onClick={handleSubmit}>Search</button>
            <button onClick={handleSubmit}>Reset</button>
            </div>

            
        </div>
    );

}; */




        //};

    //console.log("Search for:", characterName);
    //console.log("Generated Hash:", hash);


//calling marvel character end point from API
//const getCharacterData = () => {
    //setCharacterData (null);

//const timeStamp = new Date().getTime();
    

export default Search;