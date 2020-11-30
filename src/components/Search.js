import React from 'react';

const Search = ({searchField, searchChange}) => {
    console.log('searchbox');
    return (
        <div className='pa2'>
            <label for="site-search"></label>
            <input 
                id="site-search"
                className='pa3 ba b--green bg-lightest-blue' 
                type='search'
                placeholder='Search for robots'
                value={searchField}
                onChange={searchChange}
            />
        </div>
    );
}

export default Search;