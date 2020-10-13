/* eslint-disable no-console */

import Zombie from '../Zombie';

test('class Zombie - throw (wrong name)', () => {
  expect(() => {
    const zombie = new Zombie(10);
    console.log(zombie);
  }).toThrowError(Error);
});

test('class Zombie - throw (no name)', () => {
  expect(() => {
    const zombie = new Zombie();
    console.log(zombie);
  }).toThrowError(Error);
});

test('class Zombie instanceof', () => {
  expect(new Zombie('Name')).toBeInstanceOf(Zombie);
});

test('class Zombie', () => {
  expect(new Zombie('Name')).toEqual(
    {
      name: 'Name',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});
