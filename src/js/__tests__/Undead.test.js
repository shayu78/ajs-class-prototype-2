/* eslint-disable no-console */

import Undead from '../Undead';

test('class Undead - throw (wrong name)', () => {
  expect(() => {
    const undead = new Undead(10);
    console.log(undead);
  }).toThrowError(Error);
});

test('class Undead - throw (no name)', () => {
  expect(() => {
    const undead = new Undead();
    console.log(undead);
  }).toThrowError(Error);
});

test('class Undead instanceof', () => {
  expect(new Undead('Name')).toBeInstanceOf(Undead);
});

test('class Undead', () => {
  expect(new Undead('Name')).toEqual(
    {
      name: 'Name',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});
