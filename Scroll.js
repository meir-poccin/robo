import React from 'react';

const Scroll = (props) => {
	return (
     <div style={{overflowY: 'scroll', 
     border: '5px solid coral', height:'500px', margin:'50px'}}>
       {props.children}
     </div>
		);
}




export default Scroll;