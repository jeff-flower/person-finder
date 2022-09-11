import React from 'react';

// {"id":1,"name":"Dyanna Cullingford","email":"dcullingford0@nba.com","avatar":"https://robohash.org/rerumliberoamet.png?size=200x200&set=set1","description":"Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture"},

function PersonCard() {
  return (
    <div>
      <img src="https://robohash.org/rerumliberoamet.png?size=200x200&set=set1" alt=""></img>
      <p>Dyanna Cullingford</p>
      <p>Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture</p>
    </div>
  );
} 

export default PersonCard;

