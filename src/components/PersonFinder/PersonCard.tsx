import React from 'react';
import {Person} from './PersonFinder';

type PersonCardProps = {
  person: Person
};

const PersonCard = ({person}: PersonCardProps) => 
  <div >
    <img src={person.avatar} alt=""/>
    <h2>{person.name}</h2>
    <p>{person.description}</p>
  </div>

export default PersonCard;

