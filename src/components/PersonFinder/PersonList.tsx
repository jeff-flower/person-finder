import React from 'react';
import PersonCard from './PersonCard';

// props: list of people to display

export interface Person {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

type PersonListProps = {
  people: Person[];
};

const PersonList = ({people}: PersonListProps) => {
  const personItems = people.map((person) => 
    <li>
      <PersonCard person={person}/>
    </li>
  );

  return (
    <ul>{personItems}</ul>
  );
}

export default PersonList