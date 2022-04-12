import React from 'react';

const SearchBox = ({searchfield,search}) => {
    return(
    	<div className='pa2'>
       <input
       className='tc pa3 ba b--green bg-lightest-blue'
       type='search' 
       placeholder='search robots' 
       onChange={search}
       />
       </div>
    );

}  
export default SearchBox;