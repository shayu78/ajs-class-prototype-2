/* eslint-disable no-console */

import Bowerman from '../Bowerman';

test('class Bowerman - throw (wrong name)', () => {
  expect(() => {
    const bowman = new Bowerman(10);
    console.log(bowman);
  }).toThrowError(Error);
});

test('class Bowerman - throw (no name)', () => {
  expect(() => {
    const bowman = new Bowerman();
    console.log(bowman);
  }).toThrowError(Error);
});

test('class Bowerman instanceof', () => {
  expect(new Bowerman('Name')).toBeInstanceOf(Bowerman);
});

test('class Bowerman', () => {
  expect(new Bowerman('Name')).toEqual(
    {
      name: 'Name',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});
