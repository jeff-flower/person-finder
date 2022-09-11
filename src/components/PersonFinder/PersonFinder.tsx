import React from 'react';
import PersonList from './PersonList';

export interface Person {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

type PersonFinderProps = {
  people: Person[];
};

const PersonFinder = ({people}: PersonFinderProps) => {
  return (
    <section>
      <input type="search" placeholder="Search in Air HQ"/>
      <PersonList people={people}/>
    </section>
  );
}

export default PersonFinder;