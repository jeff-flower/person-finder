import React, {ChangeEvent, useState, useMemo} from 'react';
import PersonList from './PersonList';

import './PersonFinder.css';

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
  
  const filteredPeople = useMemo(() => {
    if (searchText) {
      return people.filter((person: Person) => person.name.startsWith(searchText));
    }

    return [...people];
  }, [people, searchText]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // TODO: wrap input with form?
  return (
    <div>
      <label htmlFor="personSearch" className="visually-hidden">
        Search in Air HQ
      </label>
      <input
        type="search"
        name="personSearch"
        id="personSearch"
        placeholder="Search in Air HQ"
        value={searchText}
        onChange={handleInputChange}
        className="PersonFinder-input"
      />
      <PersonList people={filteredPeople}/>
    </div>
  );
}

export default PersonFinder;