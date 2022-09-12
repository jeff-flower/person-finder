import React from 'react';
import {Person} from './PersonFinder';

import './PersonCard.css';

type PersonCardProps = {
  person: Person
};

const PersonCard = ({person}: PersonCardProps) => 
  <div>
    <img src={person.avatar} alt=""/>
    <h2 className="PersonCard-header">{person.name}</h2>
    <p className="PersonCard-description">{person.description}</p>
  </div>

export default PersonCard;

