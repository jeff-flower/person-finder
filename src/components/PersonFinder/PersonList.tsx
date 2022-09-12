import React from 'react';
import PersonCard from './PersonCard';
import {Person} from './PersonFinder';

import './PersonList.css';

type PersonListProps = {
  people: Person[];
};

const PersonList = ({people}: PersonListProps) => {
  const personItems = people.map((person) => 
    <li className="PersonList-listitem" key={person.id}>
      <PersonCard person={person}/>
    </li>
  );

  return (
    <ul className="PersonList">{personItems}</ul>
  );
}

export default PersonList