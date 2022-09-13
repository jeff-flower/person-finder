import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonFinder, {Person} from './PersonFinder';

const mockPeople: Person[] = [
  {id: 1, name: 'Aaaa Aaaa', avatar: 'https://example.com/1', description: 'blah'},
  {id: 2, name: 'Bbbb Aaaa', avatar: 'https://example.com/2', description: 'blah'},
  {id: 3, name: 'Cccc Cccc', avatar: 'https://example.com/3', description: 'blah'}
];

test('loads all people by default', async () => {
  render(<PersonFinder people={mockPeople}/>);

  const personlistitems = screen.getAllByRole('listitem');
  expect(personlistitems.length).toBe(mockPeople.length);
});


test('finds people whose first or last name includes the search text', () => {
  render(<PersonFinder people={mockPeople}/>);

  userEvent.type(screen.getByPlaceholderText('Search in Air HQ'), 'Aaaa');

  const personlistitems = screen.getAllByRole('listitem');
  expect(personlistitems.length).toBe(2);
});

test('search is case insensitive', () => {
  render(<PersonFinder people={mockPeople}/>);

  userEvent.type(screen.getByPlaceholderText('Search in Air HQ'), 'aaaa');

  const personlistitems = screen.getAllByRole('listitem');
  expect(personlistitems.length).toBe(2);
});