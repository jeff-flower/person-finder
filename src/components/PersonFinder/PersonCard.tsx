import React from 'react';
import {Person} from './PersonList';

type PersonCardProps = {
  person: Person
};

const PersonCard = ({person}: PersonCardProps) => 
  <div>
    <img src={person.avatar} alt=""></img>
    <p>{person.name}</p>
    <p>{person.description}</p>
  </div>

export default PersonCard;

