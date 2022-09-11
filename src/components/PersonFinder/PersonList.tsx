import React from 'react';
import PersonCard from './PersonCard';
import {Person} from './PersonFinder';

type PersonListProps = {
  people: Person[];
};

const PersonList = ({people}: PersonListProps) => {
  const personItems = people.map((person) => 
    <li key={person.id}>
      <PersonCard person={person}/>
    </li>
  );

  return (
    <ul>{personItems}</ul>
  );
}

export default PersonList