import React, {ChangeEvent, useState} from 'react';
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
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <section>
      <input
        type="search"
        placeholder="Search in Air HQ"
        value={searchText}
        onChange={handleInputChange}
      />
      <PersonList people={people}/>
    </section>
  );
}

export default PersonFinder;