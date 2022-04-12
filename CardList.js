import React from 'react';
import Card from './Card';


const CardList = ({robo,x}) => {
	/*const cardsArray = robo.map((user, i) => {
		return (
		<Card key={i}
		 id={robo[i].id} 
		 name={robo[i].name} 
		 email={robo[i].email}/>
		 );
	})
	return(
       <div>
		   {cardsArray} 
		</div>
	);*/
	return(
       <div>
		   {
		   	robo.map((user, i) => {
				return (
				<Card 
					key={i}
					 id={robo[i].id} 
					 name={robo[i].name} 
					 email={robo[i].email}
					 k={x}
			/>
		 );
	   })
	 } 
	</div>
  );
}

export default CardList;