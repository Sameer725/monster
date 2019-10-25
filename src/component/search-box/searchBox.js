import React from 'react';
import './searchBox.css';

const SearchBox = ({filter,placeholder}) =>{
    return(
       
            <input className='search' type='search' placeholder={placeholder} 
            onChange={filter}
        />
    )
}

export default SearchBox;