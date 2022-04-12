import React from 'react';

const Card = ({name, email, id, k}) =>{
//const {name, email, id} = props;
	return(
    <div className='tc bg-light-green dib br3 pa3 
    ma2 grow bw2 shadow-5'>
    <img alt='' src={`https://robohash.org/${id}`}/>
    <div>
    	<h2>{name}</h2>
    	<p>{email}</p>
        <p>{k}</p>
    </div>
    </div>
		);
}
export default Card;			