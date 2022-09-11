import React from 'react';
import PersonCard from './PersonCard';

// props: list of people to display

interface Person {
  name: string;
  avatar: string;
  description: string;
}

type PersonListProps = {
  people: Person[];
};

const PersonList = ({people}: PersonListProps) => 
    <ul>
      <li>
        <PersonCard/>
      </li>
    </ul>

export default PersonList