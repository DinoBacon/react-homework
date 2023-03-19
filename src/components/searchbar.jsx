import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './searchbar.css'

export const SearchBar = () => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://www.mediawiki.org/w/api.php")
        .then((response) => response.json())
        .then((json) => {
         })
        
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData (value)
    };

    return( 
    <div className="input-wrapper">
    <FaSearch id="search-icon"/>
    <input 
    placeholder="Type to Search" value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
    )
}

export default SearchBar