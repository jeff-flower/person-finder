import React from 'react';
import {Person} from './PersonFinder';

import './PersonCard.css';

type PersonCardProps = {
  person: Person
};

/** 
 * For the future
 * - look into handling of missing images
*/ 
const PersonCard = ({person}: PersonCardProps) => 
  <div className="PersonCard">
    <img src={person.avatar} alt="" className="PersonCard-img" />
    <div>
      <h2 className="PersonCard-header">{person.name}</h2>
      <p className="PersonCard-description">{person.description}</p>
    </div>
  </div>

export default PersonCard;

