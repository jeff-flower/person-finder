import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonFinder, {Person} from './PersonFinder';

const mockPeople: Person[] = [
  {id: 1, name: 'Aaaa Aaaa', avatar: 'https://example.com/1', description: 'blah'},
  {id: 2, name: 'Bbbb Bbbb', avatar: 'https://example.com/2', description: 'blah'}
];

test('loads all people by default', async () => {
  render(<PersonFinder people={mockPeople}/>);

  const personlistitems = screen.getAllByRole('listitem');
  expect(personlistitems.length).toBe(mockPeople.length);
});

test('filters the list of people by names that begin with text input', () => {
  render(<PersonFinder people={mockPeople}/>);

  userEvent.type(screen.getByPlaceholderText('Search in Air HQ'), 'A');

  const personlistitems = screen.getAllByRole('listitem');
  expect(personlistitems.length).toBe(1);

});